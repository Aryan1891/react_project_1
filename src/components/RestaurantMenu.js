import { useState,useEffect } from "react"
import { MENU_LINK } from "../utils/constants"
import { useParams } from "react-router-dom"
const RestaurantMenu=()=>{
  const[restaurantItems,setRestaurantItems ]=useState([])
  const {resId}=useParams();

  useEffect(()=>{
  fetchMenu()
  },[])

  const fetchMenu=async()=>{
    const data=await fetch(MENU_LINK + resId)
    const json= await data.json()
    console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards)
    setRestaurantItems(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards)
  }

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