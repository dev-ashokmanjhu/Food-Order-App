import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <img
      className="h-10 rounded-full p-2"
      src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
      alt="logo"
    />
  );
};

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-blue-500 text-white font-medium h-8">
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
