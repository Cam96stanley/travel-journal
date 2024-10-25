function Card(props) {
  return (
    <div className="container">
      <div className="place--container">
        <img src={props.place.imageUrl} className="place--image" />
        <div className="place--details">
          <img src="public/location-ping.png" className="place--ping" />
          <span className="place--location">{props.place.location}</span>
          <span>
            <a href={props.place.googleMapsUrl} className="place--map">
              View on Google Maps
            </a>
          </span>
          <h1 className="place--title">{props.place.title}</h1>
          <span className="place--dates">
            {props.place.startDate}-{props.place.endDate}
          </span>
          <p className="place--description">{props.place.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
