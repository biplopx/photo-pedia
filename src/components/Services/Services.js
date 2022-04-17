import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setservices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setservices(data))
  }, [services])
  return (
    <section className='py-5'>
      <h2 className='text-center fw-bold mb-5'>Services</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
          {
            services.map(service => <Service key={service.id}
              service={service}></Service>)
          }
        </div>
      </div>
    </section>
  );
};

export default Services;