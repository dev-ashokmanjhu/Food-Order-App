import React, { useEffect, useState } from "react";
import Card from "./Card";
import { restaurantList } from "../constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);

  useEffect(() => {
    getRestaurantsData();
  }, []);

  async function getRestaurantsData() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      setRestaurants(json?.data?.cards[0]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards);
    } catch (error) {
      setRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    }
  }

  const filterRestaurants = (restos, inputtext) => {
    let input = inputtext.toLowerCase();
    const data = restos.filter((res) =>
      res.data.name.toLowerCase().includes(input)
    );
    return data;
  };
  console.log(restaurants);

  return (
    <div className="bodyContainer">
      <h1 className="text-center font-bold font-sans">Top Restaurats</h1>
      <div className="flex justify-center items-center m-3">
        <input
          type="text"
          className="border-2 border-gray-500 rounded-md hover:border-green-400 p-1 font-bold "
          name="search"
          id="searchinput"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
            setFilteredRestaurants(restaurants);
          }}
        />
        <button
          className="border-2  mx-2 rounded-md bg-blue-500 hover:bg-transparent text-white p-1 hover:text-black"
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
        <div className="grid grid-cols-4 gap-3 p-3">
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <Card restaurant={restaurant} key={restaurant.data.id} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
