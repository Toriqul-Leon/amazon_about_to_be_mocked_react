import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [
    createUserWithEmailAndPassword,
    user,
  ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
    console.log(e.target.value);
  };

  if (user) {
    navigate("/shop");
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password didn't Match");
      return;
    } else {
      setError("");
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <div>
            {" "}
            <h1 className="form-title">Sign Up</h1>
            <form onSubmit={handleFormSubmit} action="">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  onBlur={handleEmailBlur}
                  required
                  type="email"
                  name="email"
                  id=""
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  onBlur={handlePasswordBlur}
                  required
                  type="password"
                  name="password"
                  id=""
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  onBlur={handleConfirmPasswordBlur}
                  required
                  type="password"
                  name="confirm-password"
                  id=""
                />
              </div>
              <p style={{ color: "red" }}>{error}</p>
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
