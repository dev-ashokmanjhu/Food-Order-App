import React from "react";
import { IMG_CDN_URL } from "../constants";

const Card = ({ restaurant }) => {
  const { name, cuisines, area, cloudinaryImageId } = restaurant.data;
  return (
    <div className="border-2 rounded-md shadow-md text-center h-52 ">
      <img
        className="rounded-md h-24 w-full"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="thumbnail"
      />
      <div className="flex justify-between flex-col h-28 p-2">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-xs break-words">
          {cuisines.join(",").length > 20
            ? cuisines.join(",").slice(0, 20) + "..."
            : cuisines.join(",")}
        </p>
        <h4>{area}</h4>
      </div>
    </div>
  );
};

export default Card;
