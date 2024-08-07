import React, { useEffect, useState, createContext, useContext } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      if (user) {
        // Redirect based on user role
        if (user.role === 'buyer') {
          history.push('/buyer-dashboard');
        } else if (user.role === 'seller') {
          history.push('/seller-dashboard');
        }
      } else {
        history.push('/login');
      }
    });
    return unsubscribe;
  }, [history]);

  const value = { currentUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
