import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col col-sm-8 col-lg-4 col-md-6 mx-auto">
            <div className='p-3 border rounded-3'>
              <h3 className='form-title fs-4 text-center mb-3'>Please Registration</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control none-outline" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn w-100 text-white vp-btn">Login</button>
              </form>
              <p className='mt-3 pe-auto'>New to Genius Car <Link to='/signup'>Please Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;