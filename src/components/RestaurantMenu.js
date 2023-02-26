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
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        id
    );
    const json = await response.json();
    setRestaurant(json?.data);
  }
  if (!restaurant) {
    return <Shimmer />;
  }
  return (
    <div className="resMenuContainer">
      <div className="restaurant-detail">
        <div className="resImg">
          <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        </div>
        <div className="resDetail">
          <h2>{restaurant.name}</h2>
          <h3>{restaurant.cuisines.join(",")}</h3>
          <h4>
            {restaurant.area} ,{restaurant.locality},{restaurant.city}
          </h4>
          <h5>Rating:{restaurant.avgRatingString}</h5>
        </div>
        <div className="offers">
          <h2>Offers</h2>
          <h3>60% off up to ₹120 | Use code TRYNEW</h3>
        </div>
      </div>
      <div className="resMenu">
        <div className="filters">
          <h1>Filters</h1>
        </div>
        <hr />
        <div className="menuItems">
          {Object.values(restaurant?.menu?.items).map((item) => (
            <>
              <div className="itemContainer" key={item.id}>
                <div className="itemDetail">
                  <h3>{item.name}</h3>
                  <h3>{item.price}</h3>
                </div>
                <div className="itemImgContainer">
                  <img
                    className="itemImg"
                    src={IMG_CDN_URL + item.cloudinaryImageId}
                  />
                </div>
              </div>
              <hr />
            </>
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
