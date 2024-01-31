import { CDN_LINK } from "../utils/constants";
const RestaurantCard = ({ name, cuisines,avgRating,cloudinaryImageId, sla }) => (
    <div className="card">
      <img
        src={CDN_LINK+cloudinaryImageId}
        alt={name}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );

  export default RestaurantCard;
 