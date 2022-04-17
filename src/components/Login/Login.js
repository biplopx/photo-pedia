import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import SocialLoign from '../SocialLogin/SocialLoign';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  let loginError;


  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, errorPassReset] = useSendPasswordResetEmail(auth
  );

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  if (user) {
    navigate('/');
  }

  // login error
  if (error) {
    loginError = <div className="alert alert-danger my-3" role="alert">Error: {error?.message}</div>
  }

  // Handle login
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  // Reset Password
  const resetPassword = async () => {
    if (email) {
      sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else {
      toast('please enter your email address');
    }
  }

  return (
    <section className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col col-sm-8 col-lg-4 col-md-6 mx-auto">
            <div className='p-3 border rounded-3'>
              <h3 className='form-title fs-4 text-center mb-3'>Please Registration</h3>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input onBlur={handleEmailBlur} type="email" className="form-control none-outline" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input onBlur={handlePasswordBlur} type="password" className="form-control" id="password" required />
                </div>
                <button type="submit" className="btn w-100 text-white vp-btn">Login</button>
              </form>
              {loginError}
              <p className='mt-3 pe-auto'>New to Genius Car <Link to='/signup'>Please Register</Link></p>
              <p>Forget Password? <button style={{ color: 'var(--primary-color)' }} className='btn p-0 btn-link text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
              <SocialLoign></SocialLoign>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;