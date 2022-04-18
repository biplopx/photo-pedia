import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SocialLoign = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorShow;


  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user])

  if (loading) {
    return <Loading></Loading>
  }

  // user signup error handle
  if (error) {
    errorShow = <div className="alert alert-danger my-3" role="alert">Error: {error?.message}</div>
  }



  return (
    <div>
      <div className="row">
        <div className="col"><hr /></div>
        <div className="col-auto">OR</div>
        <div className="col"> <hr /> </div>
      </div>
      {errorShow}
      <button onClick={() => signInWithGoogle()} className="btn border border-success w-100 p-1 border rounded mb-3">
        <p className='m-0 text-center fs-5'>
          <img src="https://i.postimg.cc/tRwrhM0w/google.png" width="30px" alt="" /> Sign in with Facebook</p>
      </button>
    </div>
  );
};

export default SocialLoign;