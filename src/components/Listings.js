import React, { useState, useEffect } from 'react';
import { FaLocationPin } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";  
import { NavLink } from 'react-router-dom';
import './prof.css';
import './Home.css';

const Listings = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await fetch('http://localhost/serviceSpinBackend/getServiceProviders.php');
        const data = await response.json();
        if (data.success) {
          setProviders(data.providers);
        }
      } catch (error) {
        alert('Error fetching service providers:', error);
      }
    };

    fetchProviders();
  }, []);

  return (
    <div>
      <h1>Listings</h1>
      <div className='search-input'>
        <span><IoMdSearch /></span>
        <input placeholder='What Are You Looking For' />
      </div>
      <div className='listings'>
        {providers.map((provider, index) => (
          <NavLink 
            to={`/listing/${provider.id}`} 
            key={index} 
            state={{ provider }} // Pass provider data as state
          >
            <div className='listing'>
              <div className='listing-cover'>
                <img src={`http://localhost/serviceSpinBackend/profilePics/${provider.profilePic}`}></img>
              </div>
              <div className='listing-details'>
                <h2>{provider.name}</h2>
                <p>{provider.serviceDesc}</p>
                <p className='loc'><span><FaLocationPin /></span> {provider.location}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Listings;
