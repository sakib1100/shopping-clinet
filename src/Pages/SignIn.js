import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "./../firebase.init";
import { toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);

  const saveUserInfo = (user) => {};

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    try {
      const result = await createUserWithEmailAndPassword(email, password);
      const userObj = {
        username: result.user.email,
        id: result.user.uid,
      };
    } catch (error) {}

    toast.success("User Create Successfully");

    if (user) {
      navigate("/home");
    }
  };

  return (
    <div className="hero mx-auto  my-32">
      <form
        onSubmit={handleOnSubmit}
        className="card-body w-80 max-w-sm rounded shadow-2xl bg-base-100"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-base-200 hover-accent bg-neutral">
            Sign In
          </button>
          <a className="mt-3">
            Already have an account ?{" "}
            <Link className="text-primary" to="/login">
              Login
            </Link>
          </a>
        </div>
        <div className="divider">OR</div>

        <button
          onClick={() => signInWithGoogle()}
          className="btn text-neutral hover-accent tx"
        >
          Login With Google
        </button>
      </form>
    </div>
  );
};

export default SignIn;
