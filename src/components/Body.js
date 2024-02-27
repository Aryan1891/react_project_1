import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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


  if (!allRestaurants) return null;

  if (filteredRestaurants?.length === 0)
    return <h1>No Restaurant matches your Filter!!</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        
        <input
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
        className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"   
               onClick={() => {
            const data = filterData(searchText, allRestaurants, initialData);
            setAllRestaurants(data);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap"  >
        {allRestaurants.map((restaurant) => (
          // <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          <Link

          to={"/restaurant/" + restaurant.info.id}

          key={restaurant.info.id} className="bg-slate-200 hover:bg-slate-800 py-25"

        >

          <RestaurantCard {...restaurant.info} />

        </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
