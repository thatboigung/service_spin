import React from 'react';
import { Link } from 'react-router-dom';
import './prof.css';
import { MdEdit } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import './Home.css';
import { NavLink } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";  

const Listings = () => {

  return (
    <div>
      <h1>Listings</h1>
      <div className='search-input'>
     <span><IoMdSearch /></span>  <input placeholder='What Are You Looking For'></input>
      </div>
      <h2>Electrician</h2>
      
      <div className='listings'>
        <NavLink to="/listing/1">
        <div className='listing'>
          <div className='listing-cover'>

          </div>
          <div className='listig-details'>
            <h2>Service Name</h2>
            <p><small>Listings Description</small>  </p>
            <p className='loc'> <span><FaLocationPin /></span> Location</p>
          </div>
        </div>
        </NavLink>
        
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
      <div className='create-btn'><IoIosArrowDropdown /> More</div>
      <h2>Plumbers</h2>
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
      <div className='create-btn'><IoIosArrowDropdown /> More</div>
      <h2>Maids</h2>
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
      <div className='create-btn'><IoIosArrowDropdown /> More</div>
      <h2>Piece Jobs</h2>
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

export default Listings;
