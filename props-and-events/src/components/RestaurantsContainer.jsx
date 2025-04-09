import { restaurants } from "../data/data.js";
import Restaurant from "./Restaurant";

function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {restaurants.map(restaurant => <Restaurant restaurant={restaurant} />)}
    </div>
  );
}

export default RestaurantsContainer;
