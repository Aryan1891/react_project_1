import { useState, useEffect } from "react";
import { MENU_LINK } from "../utils/constants"

const useRestaurantMenu =(resId)=>{
    const [restaurantItems, setRestaurantItems]=useState([])

  useEffect(()=>{
  fetchMenu()
  },[])
 
    const fetchMenu=async()=>{
    const data=await fetch(MENU_LINK + resId)
    const json= await data.json()
    console.log("sdfd")
    console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[1].itemCards)
    setRestaurantItems(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[1].itemCards)
  }

  return restaurantItems


}

export default useRestaurantMenu

