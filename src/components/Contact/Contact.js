import React from 'react';

const Contact = () => {
  return (
    <section className='py-5'>
      <div className="container">
        <h2 className="text-center fw-bold mb-3">Get In Touch</h2>
        <div className="row flex-lg-nowrap flex-md-wrap row-cols-1  row-cols-lg-2 row-cols-md-1 gap-3 rounded-3 m-2">
          <div className="col border rounded-3 p-3">
            <h3 className='mb-4 fw-bold'>Contact</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label> <br />
                <input type="text" className="form-control" placeholder="Enter your name" id="name" aria-label="Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" id="email" aria-label="Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
              </div>
              <button type='button' className='btn btn-lg text-white vp-btn rounded-pill'>Submit</button>
            </form>

          </div>
          <div className="col rounded-3 border p-3">
            <h3 className='fw-bold mb-4'>Location</h3>
            <p><strong>Address:</strong> House No.420, Shantahar Road, Bogura, Bangladesh</p>
            <p><strong>Phone:</strong> 0185200000</p>
            <p><strong>Email:</strong> contact@photopedia.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;