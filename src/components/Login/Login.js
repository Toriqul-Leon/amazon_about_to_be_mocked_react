import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="form-container">
        <div>
          {" "}
          <h1 className="form-title">Login</h1>
          <form action="">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="" />
            </div>
            <input className="form-submit" type="submit" value="Login" />
          </form>
          <p>
            New to Amazon?{" "}
            <Link className="form-link" to="/signup">
              Create an Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
