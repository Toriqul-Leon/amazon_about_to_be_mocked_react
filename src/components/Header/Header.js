import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="sub-header">
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;