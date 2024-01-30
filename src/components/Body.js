import React, { useState, useEffect } from "react";
import { restaurantList}  from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);

      // Optional Chaining
      const cards = json?.data?.cards[2]?.data?.data?.cards || [];

      setAllRestaurants(cards);
      setFilteredRestaurants(cards);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  // No need to check for !allRestaurants, as an empty array will be falsy
  if (filteredRestaurants.length === 0)
    return <h1>No Restaurant matches your filter!</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            const filteredData = filterData(searchText, allRestaurants);
            // update the state - filteredRestaurants
            setFilteredRestaurants(filteredData);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
