import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="form-container">
          <div>
            {" "}
            <h1 className="form-title">Sign Up</h1>
            <form action="">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input required type="email" name="email" id="" />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input required type="password" name="password" id="" />
              </div>
              <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input required type="password" name="confirm-password" id="" />
              </div>
              <input className="form-submit" type="submit" value="Sign Up" />
            </form>
            <p>
              Already Have an Account?{" "}
              <Link className="form-link" to="/login">
                Login
              </Link>
            </p>
            <div className="line-view">
              <div className="line"></div>
              <span>or</span>
              <div className="line"></div>
            </div>
            <div className="google-logo">
              <img
                src="https://www.clipartmax.com/png/middle/219-2197783_training-documents-google-logo-icon-png.png"
                alt=""
              />
              <span>Continue with Google </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
