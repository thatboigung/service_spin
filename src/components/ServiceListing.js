import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

function ServiceListing() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    db.collection('services').onSnapshot(snapshot => {
      setServices(snapshot.docs.map(doc => doc.data()));
    });
  }, []);

  return (
    <div>
      {services.map(service => (
        <div key={service.id}>
          <h2>{service.name}</h2>
          <p>{service.description}</p>
          <p>Price: ${service.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ServiceListing;
