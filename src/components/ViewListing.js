import React, { useState } from 'react';
import { FaLocationPin, FaStar, FaUser } from "react-icons/fa6"; 
import { IoMdSend } from "react-icons/io";              
import { useLocation } from 'react-router-dom';        
import Booking from './booking'; // Import the Booking component
import { FaUserCircle } from "react-icons/fa";

const ViewListing = () => {
  const location = useLocation(); 
  const { provider } = location.state || {}; 

  const [isBookingOpen, setIsBookingOpen] = useState(false); // State to manage popup visibility

  if (!provider) {
    return <div>Listing not found.</div>;
  }

  return (
    <div>
      <div className='listing viewer-listing'>
        <div className='listing-cover'>
          {/* Optionally add an image or icon for the service provider here */}
        </div>
        <div className='listing-details '>
          <h3>{provider.name}</h3>
          <div className='listing'>
            {/* <p>{provider.rating} <FaStar /> <small>({provider.reviewCount})</small></p> */}
            <p className='loc'> <span><FaLocationPin /></span> {provider.location}</p>
          </div>
        </div>
        <div className='book-btn'>
        <div onClick={() => setIsBookingOpen(true)}> {/* Show popup on click */}
          <span>Book</span>
        </div>
      </div>
      </div>
      
      <div>
        <h3>{provider.serviceName} - From ${provider.price}</h3>
        <p>{provider.serviceDesc}</p>
      </div>
      <div className='reveals'>
        <h3>Reveals</h3>
        <div className='addReveal'>
          <div>
          <FaUserCircle />
          </div>
          <div className='textarea'>
            <textarea placeholder='Add Reveal'></textarea>
          </div>
        </div>
        <ul>
          {provider.reveals && provider.reveals.length > 0 ? (
            provider.reveals.map((reveal, index) => (
              <li key={index}>{reveal}</li>
            ))
          ) : (
            <li>No reveals available.</li>
          )}
        </ul>
      </div>
      <h3>Have a Question?</h3>
      <div className='chat'>
        <input placeholder='Write a message'></input>
        <button><IoMdSend /></button>
      </div>
      <h1>About Seller</h1>
      <p>
      {provider.bio}
      </p>

      {/* Render the Booking component as a popup */}
      {isBookingOpen && (
        <Booking 
          providerName={provider.userName} 
          onClose={() => setIsBookingOpen(false)} 
        />
      )}
    </div>
  );
};

export default ViewListing;
