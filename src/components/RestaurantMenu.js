import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Restaurantcategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(false);

  // Custom Hook
  const resInfo= useRestaurantMenu(resId)
 
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
  // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log("........",resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  // console.log("........",categories)


  return (
    <div className="menu text-center lg:w-6/12 m-auto md:w-full sm:w-full xs-w-full">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div className="bg-gray-100">{categories && categories.map((category,index)=>{
      return (
        // controlled component
       <Restaurantcategory key={category?.card?.card?.title} 
       data={category?.card?.card}
       showItems={index===showIndex ? true : false}
       setShowIndex={()=> setShowIndex(index)}
       />
        )
      })}</div>
      
      
    </div>
  );
};
export default RestaurantMenu;
