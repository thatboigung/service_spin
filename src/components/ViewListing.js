import React from 'react';
import { useParams } from 'react-router-dom';

const ViewListing = () => {
  const { id } = useParams();
  const mockListings = {
    1: { title: "Plumbing Services", description: "Fix your leaky pipes", details: "Detailed description of plumbing services." },
    2: { title: "Electrical Services", description: "Repair your electrical issues", details: "Detailed description of electrical services." },
  };

  const listing = mockListings[id];

  return (
    <div>
      <h1>{listing.title}</h1>
      <p>{listing.description}</p>
      <p>{listing.details}</p>
    </div>
  );
};

export default ViewListing;
