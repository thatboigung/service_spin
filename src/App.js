import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Listings from './components/Listings';
import ViewListing from './components/ViewListing';
import Chat from './components/Chat';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import './App.css';
import Topbar from './components/topbar';
import EditProfile from './components/editprofile';
import CreateService from './components/create-service';

function App() {
  return (
    <div className='container'>
    <Router>
      <div className="app">
        <Topbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listing/:id" element={<ViewListing />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/edit-prof" element={<EditProfile />} />
          <Route path="/create" element={<CreateService />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
    </div>
  );
}

export default App;
