import React from "react";
import Card from "./Card";

const Body = () => {
  return (
    <div className="bodyContainer">
      <h1 className="heading">Top Restaurats</h1>
      <div className="searchcontainer">
        <input type="text" name="search" id="searchinput" />
        <button className="searchBtn">Search</button>
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Body;
