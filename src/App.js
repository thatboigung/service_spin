import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Listings from './components/Listings';
import ViewListing from './components/ViewListing';
import Chat from './components/Chat';
import Profile from './components/Profile';
import './App.css';
import EditProfile from './components/editprofile';
import CreateService from './components/create-service';
import Auth from './components/Auth';
import Topbar from './components/topbar';

function App() {
  const [user, setUser] = useState(null);
  const [isServiceProvider, setIsServiceProvider] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const getUser = async (userId) => {
        const response = await fetch(`http://localhost/serviceSpinBackend/getUser.php?userId=${userId}`);
        const data = await response.json();
        if (data.success) {
          setUser(data.user);
          setIsServiceProvider(data.user.isServiceProvider); // Check if user is a service provider
        } else {
          localStorage.removeItem('userId');
          setUser(null);
        }
      };
      getUser(userId);
    }
  }, []);

  const handleLogin = (user) => {
    setUser(user);
    setIsServiceProvider(user.isServiceProvider); // Set service provider status on login
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setUser(null);
    setIsServiceProvider(false); // Reset service provider status on logout
  };

  return (
    <Router>
      {user ? (
        <>
          <div className="container">
            <div className="app">
              <Topbar isServiceProvider={isServiceProvider} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/listings" element={<Listings />} />
                <Route path="/listing/:id" element={<ViewListing />} />
                <Route path="/chat/:id" element={<Chat />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/edit-prof" element={<EditProfile />} />
                <Route path="/create" element={<CreateService />} />
                <Route path="*" element={<Navigate to="/home" />}></Route>
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <>
          <Routes>
            <Route path='/Auth' element={<Auth onLogin={handleLogin} />}></Route>
            <Route path="*" element={<Navigate to="/auth" />}></Route>
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
