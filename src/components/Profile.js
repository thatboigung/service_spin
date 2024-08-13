import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import './prof.css';
import { MdEdit } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Profile = () => {
  return (
    <div>
      
      <div className='Profile-user'>
        <div className='prof-pic'>
        <FaUserCircle /> 
        </div>
        <div>
          <h2>User Name</h2>
          <NavLink to="edit-prof"><div className='edit'><span><MdEdit /></span> Edit Profile </div></NavLink>
          
        </div>
        
      </div>
      <div className='prof-nav'>
        <div className='active'>Services</div>
        <div>Details</div>
      </div>
      <NavLink to="/create">
      <div className='create-btn'> Create Service <span><FaPlus /></span></div>
      </NavLink>
      
      <div className='listings'>
        <div className='listing'>
          <div className='listing-cover'>

          </div>
          <div className='listig-details'>
            <h2>Service Name</h2>
            <p>Listings Description </p>
            <p className='loc'> <span><FaLocationPin /></span> Location</p>
          </div>
        </div>
        <div className='listing'>
          <div className='listing-cover'>

          </div>
          <div className='listig-details'>
            <h2>Service Name</h2>
            <p>Listings Description </p>
            <p className='loc'> <span><FaLocationPin /></span> Location</p>
          </div>
        </div>
        <div className='listing'>
          <div className='listing-cover'>

          </div>
          <div className='listig-details'>
            <h2>Service Name</h2>
            <p>Listings Description </p>
            <p className='loc'> <span><FaLocationPin /></span> Location</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
