import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const getUser = async () => {
        try {
          const response = await fetch(`http://localhost/serviceSpinBackend/getUser.inc.php?userId=${userId}`);
          const data = await response.json();
          if (data.success) {
            setUser(data.user);
          } else {
            localStorage.removeItem('userId');
            setUser(null);
          }
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      };
      getUser();
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('userId', userData.id);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('userId');
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
