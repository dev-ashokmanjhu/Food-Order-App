import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <img
      className="logo"
      src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
      alt="logo"
    />
  );
};

const Header = () => {
  return (
    <div className="flex justify-between bg-black">
      <div className="title">
        <Link to="/">
          <Logo />
        </Link>
        <div className="location">Jaipur,Rajasthan,India</div>
      </div>
      <Link to="/">
        <h1>FoodVilla</h1>
      </Link>
      <div className="navitems">
        <ul>
          <Link to="/offers">
            <li>Offers</li>
          </Link>
          <Link to="/help">
            <li>Help</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
