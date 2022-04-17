import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Signup.css';
import SocialLoign from '../SocialLogin/SocialLoign';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  let errorShow;

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  //Handle Input value

  const handleNameBlur = event => {
    setName(event.target.value);
  }

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }


  // user signup error handle
  if (error) {
    errorShow = <div className="alert alert-danger my-3" role="alert">Error: {error?.message}</div>
  }

  // if user exits 
  if (user) {
    console.log(user)
  }

  // User registration function
  const handleSignup = async (event) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate('/home');
  }

  return (
    <section className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col col-sm-8 col-lg-4 col-md-6 mx-auto">
            <div className='p-3 border rounded-3'>
              <h3 className='form-title fs-4 text-center mb-3'>Please Registration</h3>
              <form onSubmit={handleSignup}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input onBlur={handleNameBlur} type="name" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input onBlur={handleEmailBlur} type="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input onBlur={handlePasswordBlur} type="password" className="form-control" id="password" required />
                </div>
                <button type="submit" className="btn w-100 text-white vp-btn">Login</button>
              </form>
              {errorShow}
              <p className='mt-3 pe-auto'>Already have account? <Link to='/login' className='text-danger'>Please Login</Link></p>
              <SocialLoign></SocialLoign>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;