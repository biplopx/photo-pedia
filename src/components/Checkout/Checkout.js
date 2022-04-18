import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Checkout = () => {
  const [user] = useAuthState(auth);
  const [address, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const { state } = useLocation();
  const { service } = state;

  //handle address
  const handleAddressBlur = event => {
    setAdress(event.target.value);
  }
  //handle phone
  const handlePhoneBlur = event => {
    setPhone(event.target.value);
  }

  // handle Submit
  const handleCheckoutSumbit = event => {
    event.preventDefault();
    toast(`Your Address: ${address} Your Phone: ${phone} (Thank You For Booking)`)
  }
  return (
    <section className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col col-sm-8 col-lg-4 col-md-6 mx-auto">
            {/* <div className='p-3 border rounded-3 mb-3'>
              <h3 className='form-title fs-4 text-center mb-3'>You are booking</h3>
              <p><strong>Service:</strong> {service?.name}</p>
              <p><strong>Price:</strong> ${service?.price}</p>
            </div> */}
            <div className='p-3 border rounded-3'>
              <h3 className='form-title fs-4 text-center mb-3'>You are booking</h3>
              <p><strong>Service:</strong> {service?.name}</p>
              <p><strong>Price:</strong> ${service?.price}</p>
              <div className="row">
                <div className="col"><hr /></div>
                <div className="col-auto">Please fill up details</div>
                <div className="col"> <hr /> </div>
              </div>
              <form onSubmit={handleCheckoutSumbit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="name" className="form-control" value={user.displayName} id="name" required readOnly />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" value={user.email} id="email" required readOnly />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input onBlur={handleAddressBlur} type="text" className="form-control" id="address" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input onBlur={handlePhoneBlur} type="text" className="form-control" id="phone" required />
                </div>
                <button type="submit" className="btn w-100 text-white vp-btn">Click for Book</button>
              </form>
              <ToastContainer></ToastContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;