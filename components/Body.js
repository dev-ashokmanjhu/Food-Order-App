import React, { useEffect, useState } from "react";
import Card from "./Card";
import { restaurantList } from "../constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  useEffect(() => {
    getRestaurantsData();
  }, []);

  async function getRestaurantsData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(json);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const filterRestaurants = (restos, inputtext) => {
    let input = inputtext.toLowerCase();
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
            setFilteredRestaurants(restaurants);
          }}
        />
        <button
          className="searchBtn"
          onClick={() =>
            setFilteredRestaurants(filterRestaurants(restaurants, searchInput))
          }
        >
          Search
        </button>
      </div>
      {!restaurants ? (
        <Shimmer />
      ) : (
        <div className="cards">
          {filteredRestaurants.map((restaurant, i) => (
            <Card restaurant={restaurant} key={restaurant.data.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
