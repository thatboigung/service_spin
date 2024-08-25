import React, { useState, useEffect } from 'react';
import { FaUserCircle } from "react-icons/fa";
import './prof.css';
import { MdEdit } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    profilePic: '',
    bio: '',
    serviceName: '',
    serviceDesc: '',
    location: '',
    price: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem('userId');
      if (!userId) return;

      try {
        const response = await fetch(`http://localhost/serviceSpinBackend/getUserService.php?userId=${userId}`);
        const data = await response.json();
        if (data.success) {
          setUser(data.user);
        }
      } catch (error) {
        alert('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
       <div className='navbar-prof'>
        <ul>
          <li className='active'>Info</li>
          <li>Oders</li>
          <li>Reaveals</li>
          <li>Inbox</li>
        </ul>
      </div>
      <div className='Profile-user'>
        <div className='prof-pic'>
          {user.profilePic ? (
            <img src={`http://localhost/serviceSpinBackend/profilePics/${user.profilePic}`} alt="Profile" />
          ) : (
            <FaUserCircle />
          )}
        </div>
        <div>
          <h2>{user.name}</h2>
          <NavLink to="edit-prof"><div className='edit'><span><MdEdit /></span> Edit Profile </div></NavLink>
        </div>
      </div>
     

      <div className='prof-nav'>
        <div>
          <h2>Bio</h2>
          <p>{user.bio}</p>
        </div>
        <div>
          <h2>Service Name</h2>
          <p>{user.serviceName}</p>
        </div>
        <div>
          <h2>Service Description</h2>
          <p>{user.serviceDesc}</p>
        </div>
        <div>
          <h2>Location</h2>
          <p><FaLocationPin /> {user.location}</p>
        </div>
        <div>
          <h2>Starting Price</h2>
          <p>{user.price}</p>
        </div>
      </div>
      
      <NavLink to="/create">
        <div className='create-btn'> Create Service <span><FaPlus /></span></div>
      </NavLink>
    </div>
  );
};

export default Profile;
