import RestaurantCard from "./RestaurantCard";
import { restrautList } from "../utils/mockData";

const Body = () => (
    <div className="restaurant-list">
      {restrautList.map((restaurant) => (
        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
      ))}
    </div>
  );
  export default Body;
  