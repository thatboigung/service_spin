import React from 'react';
import './Home.css';
import { FaUserCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div className='home'>
      <div className='main-cont'>
        <div className='profile-user'>
          <div className='user-img'>
        <FaUserCircle />    
          </div>
         <div>
          <p>User Name</p>
         </div>
        </div>
        <h1>Welcome to ServiceSpin</h1>
      <p>Your one-stop solution for all services.</p>
      </div>
    </div>
  );
};

export default Home;
