import React from "react";

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
    <div className="header">
      <div className="title">
        <Logo />
        <div className="location">Jaipur,Rajasthan,India</div>
      </div>
      <h1>FoodVilla</h1>
      <div className="navitems">
        <ul>
          <li>Offers</li>
          <li>Help</li>
          <li>Profile</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
