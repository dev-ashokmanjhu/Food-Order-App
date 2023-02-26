import React from "react";
import { IMG_CDN_URL } from "../constants";

const Card = ({ restaurant }) => {
  const { name, cuisines, area, cloudinaryImageId } = restaurant.data;
  return (
    <div className="border-2 rounded-md shadow-md text-center">
      <img
        className="cardimg"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="thumbnail"
      />
      <h2>{name}</h2>
      <p className="text-xs break-words">{cuisines}</p>
      <h4>{area}</h4>
    </div>
  );
};

export default Card;
