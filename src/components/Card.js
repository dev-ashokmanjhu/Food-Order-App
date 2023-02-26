import React from "react";
import { IMG_CDN_URL } from "../constants";

const Card = ({ restaurant }) => {
  const { name, cuisines, area, cloudinaryImageId } = restaurant.data;
  return (
    <div className="cardContainer">
      <img
        className="cardimg"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="thumbnail"
      />
      <h2>{name}</h2>
      <p>{cuisines.join(",")}</p>
      <h4>{area}</h4>
    </div>
  );
};

export default Card;
