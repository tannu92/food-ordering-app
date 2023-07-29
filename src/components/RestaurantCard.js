import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;

  return (
    <div className="restaurantCard w-[250px] m-4 p-2 border border-solid border-blue-50 shadow-md h-[280px] bg-gray-50 rounded-lg hover:bg-pink-50 hover:shadow-xl">
      <img
        className="res-logo h-[150px] w-[100%] rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="py-2 font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

// higher order component- takes component as input and return component
// input - Resturant card => output Restaurant card with promoted label

export const withPromotedLabel = (ReastaurantCard) => {
  return (props) => {   // returning component
    
    return (
      <div>
        <label className="absolute bg-gray-800 text-white ml-2 py-1 px-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
