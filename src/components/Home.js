import React, { useEffect, useState } from 'react';
import './Home.css';
import { IoMdSearch } from "react-icons/io";  
import { FaPlus, FaLocationPin } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'; 
import { FaUserCircle } from "react-icons/fa";



const Home = () => {
  const [bookings, setBookings] = useState([]);

 
  

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const fetchBookings = async () => {
      try {
        const response = await fetch(`http://localhost/serviceSpinBackend/getBookings.php?user=${userId}`);
        const data = await response.json();

        if (data.success) {
          setBookings(data.data.providerBookings); // Adjusted to match the API response structure
        } else {
          alert('Failed to fetch bookings');
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    };

    fetchBookings();
  }, []);

  const handleAcceptBooking = async (bookingId) => {
    try {
      const response = await fetch('http://localhost/serviceSpinBackend/acceptBooking.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `bookingId=${bookingId}`,
      });
      const data = await response.json();
  
      if (data.success) {
        alert(`Booking ${bookingId} accepted.`);
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking.id === bookingId ? { ...booking, status: 'Accepted' } : booking
          )
        );
      } else {
        alert('Failed to accept booking');
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleDeleteBooking = async (bookingId) => {
    try {
      const response = await fetch('http://localhost/serviceSpinBackend/cancelBooking.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `bookingId=${bookingId}`,
      });
      const data = await response.json();
  
      if (data.success) {
        alert(`Booking ${bookingId} canceled.`);
        setBookings((prevBookings) =>
          prevBookings.filter((booking) => booking.id !== bookingId)
        );
      } else {
        alert('Failed to cancel booking');
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleChat = (booking) => {
    
  };

  const handleCloseDeal = (bookingId) => {
    // Logic for closing the deal can be implemented here
    alert(`Deal closed for booking ${bookingId}`);
  };

  return (
    <div className='home'>
      <div className='main-cont'>
        <p>Your one-stop solution for all services.</p>
        <div className='search-input'>
          <span><IoMdSearch /></span>
          <input placeholder='What Are You Looking For'></input>
        </div>
        <div className='services-container'>
          <div className='services'>
            <div>
              <h2>Plumbers</h2>
              <img src='/imgs/samples/plamber.jpeg' alt='plumber'/> 
            </div>
            <div>
              <h2>Electricians</h2>
              <img src='/imgs/samples/elecrician.jpg' alt='electrician'/> 
            </div>
            <div>
              <h2>Mechanics</h2>
              <img src='/imgs/samples/mechanic.jpg' alt='mechanic'/> 
            </div>
            <div>
              <h2>Maids</h2>
              <img src='/imgs/samples/maid.jpg' alt='maid'/> 
            </div>
          </div>
          <div>
            <NavLink to="/listings">
              <button><FaPlus /> More Services</button>
            </NavLink>
          </div>
          <div className='past-bkings'>
            <h3>Bookings</h3>

            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <div key={booking.id} className='listing'>
                  <div className='listing-cover'>
                    <FaUserCircle />
                  </div>
                  <div className='listing-details'>
                    <h2>{booking.client_name}</h2> {/* Adjusted to display client's name */}
                    <p>{booking.issue_description}</p>
                    <p className='loc'><span><FaLocationPin /></span> {booking.location}</p>
                    <p>Status: {booking.status}</p>
                  </div>
                  <div className='accept'>
                    <div>
                      {booking.status === 'Pending' && (
                        <>
                          <span onClick={() => handleAcceptBooking(booking.id)} className='acceptBtn'>Accept</span>
                          <span onClick={() => handleDeleteBooking(booking.id)} className='cancel'>Cancel</span>
                        </>
                      )}
                      {booking.status === 'Accepted' && (
                        <>
                          <span onClick={() => handleChat(booking)} className='acceptBtn'>Chat</span>
                          <span onClick={() => handleCloseDeal(booking.id)} className='cancel'>Close</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No past bookings found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
