// function component that receives props and renders a restaurant's data
function Restaurant(props) {

  return (
    <div className="restaurant">

      {/* displays the restaurant's image, name */}
      <img src={props.restaurant.image} alt={props.restaurant.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        {/* displays the restaurant's data */}
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>⭐ {props.restaurant.rating}</li>
      </ul>
    </div>
  );
}

export default Restaurant;
