import React from 'react';

const Contact = () => {
  return (
    <section className='py-5'>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Get In Touch</h2>
        <div className="row row-cols-1 row-cols-lg-2 row-cols-md-1 g-5 rounded-3 m-2">
          <div className="col border rounded-3 p-3">
            <h3 className='mb-4 fw-bold'>Contact</h3>
            <form>
              <div className="mb-3">
                <label for="name" class="form-label">Name</label> <br />
                <input type="text" class="form-control" placeholder="Enter your name" id="name" aria-label="Name" />
              </div>
              <div className="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="Enter your email" id="email" aria-label="Name" />
              </div>
              <div className="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="3"></textarea>
              </div>
              <button type='button' className='btn btn-lg text-white vp-btn rounded-pill'>Submit</button>
            </form>

          </div>
          <div className="col">
            <h3 className='fw-bold'>Location</h3>
            <iframe title='address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28964.106778933718!2d89.35775864205787!3d24.84631094173613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e7e81df441%3A0x27133ed921fe73f4!2sBogura!5e0!3m2!1sen!2sbd!4v1650209148550!5m2!1sen!2sbd" width="100%" height="400px" style={{ boreder: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;