import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <img
      className="h-10"
      src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
      alt="logo"
    />
  );
};

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-blue-500">
      <div className="flex items-center p-2">
        <Link to="/">
          <Logo />
        </Link>
        <div className="location">Jaipur,Rajasthan</div>
      </div>
      <Link to="/">
        <h1>FoodVilla</h1>
      </Link>
      <div className="flex">
        <ul className="flex">
          <Link to="/offers">
            <li className="px-2">Offers</li>
          </Link>
          <Link to="/help">
            <li className="px-2">Help</li>
          </Link>
          <Link to="/cart">
            <li className="px-2">Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
