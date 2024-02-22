import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"; 
const RestaurantMenu=()=>{
  
  const {resId} = useParams();
  const restaurantItems=useRestaurantMenu(resId);

  return(
    <div className="menuItems">
      <h1>Name of the Restaurant</h1>
      <h2>items</h2>
      <ul>
      {Object.values(restaurantItems).map((item) => (

      <li key={item.card.info.id}>{item.card.info.name}</li>

      ))}
      </ul>
    </div>
  )
}

export default RestaurantMenu;