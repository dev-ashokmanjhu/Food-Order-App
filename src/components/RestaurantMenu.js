import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getRestaurant();
  }, []);
  async function getRestaurant() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.7040592&lng=77.10249019999999&menuId=" +
        id
    );
    const json = await response.json();
    console.log(json);
    setRestaurant(json?.data);
  }
  if (!restaurant) {
    return <Shimmer />;
  }
  return (
    <div className="flex flex-col">
      <div className="flex justify-between text-center bg-[#282c3f] p-2 text-white">
        <div>
          <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        </div>
        <div className="text-left p-6 flex flex-col justify-between">
          <h2 className="font-bold">{restaurant.name}</h2>
          <h3 className="font-light text-xs">
            {restaurant.cuisines.join(",")}
          </h3>
          <h4 className="font-light text-xs">
            {restaurant.area} {restaurant.locality}
          </h4>
          <div className="flex justify-between">
            <div>
              <h5 className="font-bold text-sm">
                {restaurant.avgRatingString}
              </h5>
              <h5 className="font-light text-xs">
                {restaurant.totalRatings}+ Rating
              </h5>
            </div>
            <div>
              <h5 className="font-bold text-sm">
                {restaurant.deliveryTime || "0"}
              </h5>
              <h5 className="font-light text-xs">Delivery Time</h5>
            </div>
            <div>
              <h5 className="font-bold text-sm">
                {restaurant.avgRatingString}
              </h5>
              <h5 className="font-light text-xs">Cost for Two</h5>
            </div>
          </div>
        </div>
        <div className="text-left p-6 flex flex-col">
          <h2>Offers</h2>
          <h3 className="p-3">60% off up to ₹120 | Use code TRYNEW</h3>
        </div>
      </div>
      <div className="flex justify-between p-2 text-center">
        <div>
          <h1>Filters</h1>
        </div>
        <hr />
        <div className="p-3 shadow-md h-[80vh] overflow-scroll">
          {Object.values(restaurant?.menu?.items).map((item) => (
            <div
              className="flex justify-between m-3 shadow-md p-3"
              key={item.id}
            >
              <div className="itemDetail">
                <h3 className="font-normal text-sm">{item.name}</h3>
                <h3 className="text-left text-xs">₹{item.price / 100}</h3>
              </div>
              <div className="itemImgContainer">
                <img
                  className="w-28"
                  src={IMG_CDN_URL + item.cloudinaryImageId}
                />
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className="cart">
          <h1>Cart</h1>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
