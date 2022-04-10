import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handleUserSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  const navigate = useNavigate();

  if (user) {
    console.log(user);
    navigate("/shop");
  }

  return (
    <>
      <div className="container">
        <div className="form-container">
          <div>
            {" "}
            <h1 className="form-title">Login</h1>
            <form onSubmit={handleUserSignIn} action="">
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
              <div>
                <p>{loading}</p>
              </div>
              <input
                required
                className="form-submit"
                type="submit"
                value="Login"
              />
            </form>
            <p>
              New to Amazon?{" "}
              <Link className="form-link" to="/signup">
                Create an Account
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

export default Login;
