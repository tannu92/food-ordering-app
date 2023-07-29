import ItemList from "./ItemList";
import { useState,useEffect } from "react";

// controlled component because showItems is handled by the parent

const Restaurantcategory = ({ data, showItems, setShowIndex }) => {
  
    const handleClick = () => {
    setShowIndex()
  };
//   useEffect(()=>{
//     console.log("mmmmmm",setShowIndex())
//     // showItems= !showItems
//   },[showItems])

  return (
    //Header
    <div className="bg-white shadow-md">
      <div
        className="flex justify-between p-2 mt-4 cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {/* Accordian Body */}
      {showItems && <ItemList data={data.itemCards} />}
    </div>
  );
};
export default Restaurantcategory;
