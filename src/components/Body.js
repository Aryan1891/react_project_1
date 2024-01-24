import RestaurantCard from "./RestaurantCard";
import { restrautList } from "../utils/mockData";
import { useState } from "react";


const Body = () => {
  const [listOfRestaurant,setlistOfRestaurant]=useState(restrautList);
  
  return(
    <div className="body">
      <div className="filter">
      <button className="filter-btn"
      onClick={()=>{
        const setListTo=listOfRestaurant.filter(
          (res)=>res.data.avgRating>4
        );
        setlistOfRestaurant(setListTo);
      }}>
        Filter
      </button>
      </div>
    <div className="restaurant-list">
      {listOfRestaurant.map((restaurant) => (
        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
      ))}
    </div>
    </div>
)};
  export default Body;
  