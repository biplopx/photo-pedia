import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const { id, name, image, description, price } = service;
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate('/checkout', { state: { service: service } })
  }

  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title fs-4 fw-bold">{name}</h5>
          <p className="card-text">{description}</p>
          <h6 className='fs-6 fw-bold mb-4'>Price: ${price}</h6>
          <button onClick={navigateToCheckout} type='button' className='btn text-white vp-btn rounded-pill'>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;