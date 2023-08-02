import React, { useState, useEffect, useContext} from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import useListOfRestaurants from "../utils/useListOfRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //Custom Hook

  // const listOfRestaurants = useListOfRestaurants()
  // const filteredResList = useListOfRestaurants()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4050436&lng=77.0962693&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // Optional chaining
    setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connetion</h1>
    );

    const {loggedInUser, setUserName} = useContext(UserContext)

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex flex-wrap">
        <div className="serach p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box px-4 py-1  rounded-md border border-solid border-gray shadow-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 ml-4 py-1 bg-black rounded-lg text-white"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className=" p-4 flex ">
          <button
            className="filter-btn px-4 py-1 bg-black rounded-lg text-white"
            onClick={() => {
              const filteredTopResList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredResList(filteredTopResList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className=" p-4 flex">
          <label className="mt-1">UserName: </label>
          <input className="p-1 ml-2 rounded-md border border-solid border-gray shadow-md"
          value={loggedInUser}
          onChange={(e)=>{setUserName(e.target.value)}} 
          />
          </div>

      </div>

      <div className="restaurantContainer flex flex-wrap">
        {/* restaurant cards */}
        {filteredResList?.map((data) => (
          <Link key={data.info.id} to={"/restaurants/" + data.info.id}>
            {data.info.isOpen ? (
              <RestaurantCardPromoted resData={data} />
            ) : (
              <RestaurantCard resData={data} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
