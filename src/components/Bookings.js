import React, { useState, useEffect } from 'react';
import './Bookings.css';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost/serviceSpinBackend/getBookings.php');
        const data = await response.json();
        if (data.success) {
          setBookings(data.bookings);
        }
      } catch (error) {
        alert('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  const handleAction = async (bookingId, action) => {
    try {
      const response = await fetch(`http://localhost/serviceSpinBackend/updateBooking.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          booking_id: bookingId,
          action: action
        }),
      });

      const data = await response.json();
      if (data.success) {
        setBookings((prevBookings) => 
          prevBookings.map((booking) => 
            booking.id === bookingId ? { ...booking, status: action === 'accept' ? 'Accepted' : 'Cancelled' } : booking
          )
        );
      } else {
        alert('Action failed:', data.message);
      }
    } catch (error) {
      alert('Error:', error);
    }
  };

  return (
    <div className="bookings-container">
      <h1>Bookings</h1>
      <table className="bookings-table">
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Service Provider</th>
            <th>Issue Description</th>
            <th>Booking Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.client_name}</td>
              <td>{booking.service_provider_id}</td>
              <td>{booking.issue_description}</td>
              <td>{new Date(booking.booking_date).toLocaleString()}</td>
              <td>{booking.status}</td>
              <td>
                <button onClick={() => handleAction(booking.id, 'accept')} disabled={booking.status !== 'Pending'}>Accept</button>
                <button onClick={() => handleAction(booking.id, 'cancel')} disabled={booking.status !== 'Pending'}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
