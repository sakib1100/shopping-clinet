import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from './../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {
  const navigate = useNavigate(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle,gUser] = useSignInWithGoogle(auth);


  const navigates = useNavigate();
  const location = useLocation();
  const from  = location.state?.from?.pathname || '/';
  if (user || gUser) {
    navigates(from, {replace: true });
    
  
  }

const handleOnSubmit = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  signInWithEmailAndPassword(email,password);
  navigate('/home');
}

    return (
        <div>
         <div className="hero mx-auto my-32">
   

      <form onSubmit={handleOnSubmit} className="card-body w-80 max-w-sm rounded shadow-2xl bg-base-100">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-base-200 hover-accent bg-neutral">Login</button>
          <a className='mt-3'>Create account <Link className='text-primary' to="/signIn">Sign In</Link></a>
        </div>
        <div className="divider">OR</div>

        <button  onClick={() => signInWithGoogle()} className="btn text-neutral hover-accent tx">Login With Google</button>

      </form>
     

  </div>
</div>   
      
    );
};

export default Login;