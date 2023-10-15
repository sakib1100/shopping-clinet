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
         <div class="hero mx-auto my-32">
   

      <form onSubmit={handleOnSubmit} class="card-body w-80 max-w-sm rounded shadow-2xl bg-base-100">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" class="input input-bordered" required />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn text-base-200 hover-accent bg-neutral">Login</button>
          <a className='mt-3'>Create account <Link className='text-primary' to="/signIn">Sign In</Link></a>
        </div>
        <div class="divider">OR</div>

        <button  onClick={() => signInWithGoogle()} class="btn text-neutral hover-accent tx">Login With Google</button>

      </form>
     

  </div>
</div>   
      
    );
};

export default Login;