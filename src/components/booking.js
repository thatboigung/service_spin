import React, { useState } from 'react';
import './Booking.css';

const Booking = ({ providerId, clientId, onClose }) => {
  const [issue, setIssue] = useState("");
  const [location, setLocation]=useState("");
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    if (issue.trim()) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost/serviceSpinBackend/bookService.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            clientId: clientId,
            service_provider_id: providerId,
            issue_description: issue,
            location:location,
          }),
        });

        const data = await response.json();
        if (data.success) {
          alert('Booking confirmed!');
          onClose(); // Close the popup after booking
        } else {
          alert(`Booking failed: ${data.message}`);
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please describe your issue.");
    }
  };

  return (
    <div className="booking-popup">
      <div className="booking-content">
        <h3>Book a Consultancy with Provider {providerId}</h3>
         
        <div>
        <textarea
          placeholder="Describe your issue..."
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />
        </div>
        <div>
          <input placeholder='Your Location' onChange={(e) => setLocation(e.target.value)} />
        </div>
       
        <button onClick={handleBooking} disabled={loading}>
          {loading ? 'Booking...' : 'Book'}
        </button>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Booking;
