import React from 'react';
import { Link } from 'react-router-dom';

const Listings = () => {
  const mockListings = [
    { id: 1, title: "Plumbing Services", description: "Fix your leaky pipes" },
    { id: 2, title: "Electrical Services", description: "Repair your electrical issues" },
  ];

  return (
    <div>
      <h1>Listings</h1>
      {mockListings.map(listing => (
        <div key={listing.id}>
          <h2>{listing.title}</h2>
          <p>{listing.description}</p>
          <Link to={`/listing/${listing.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Listings;
