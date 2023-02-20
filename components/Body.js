import React, { useState } from "react";
import Card from "./Card";
import { restaurantList } from "../constants";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  const filterRestaurants = (restos, inputtext) => {
    let input = inputtext.toLowerCase();
    restos = restaurants;
    const data = restos.filter((res) =>
      res.data.name.toLowerCase().includes(input)
    );
    return data;
  };
  return (
    <div className="bodyContainer">
      <h1 className="heading">Top Restaurats</h1>
      <div className="searchcontainer">
        <input
          type="text"
          name="search"
          id="searchinput"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            setRestaurants(restaurantList);
          }}
        />
        <button
          className="searchBtn"
          onClick={() =>
            setRestaurants(filterRestaurants(restaurants, searchInput))
          }
        >
          Search
        </button>
      </div>
      <div className="cards">
        {restaurants.map((restaurant, i) => (
          <Card restaurant={restaurant} key={restaurant.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
