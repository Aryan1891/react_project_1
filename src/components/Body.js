import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

function filterData(searchText, restaurants , initialData) {
  if(!searchText){
    console.log(initialData);
    return initialData;
  }
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setInitialData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  console.log("render");

  if (!allRestaurants) return null;

  if (filteredRestaurants?.length === 0)
    return <h1>No Restaurant matches your Filter!!</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants, initialData);
            setAllRestaurants(data);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {allRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
