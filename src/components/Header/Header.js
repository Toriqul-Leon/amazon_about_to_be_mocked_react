import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <nav className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="sub-header">
        <a href="/shop">Shop</a>
        <a href="/order">Order</a>
        <a href="/inventory">Inventory</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default Header;
