import { restaurants } from "../data/data.js";
import Restaurant from "./Restaurant";

// function that renders the restaurants list
function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {/*Goes through the restaurant's data and renders it */}
      {restaurants.map(restaurant => <Restaurant keys={restaurant.id} restaurant ={restaurant} />)}
    </div>
  );
}

export default RestaurantsContainer;
