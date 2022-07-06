import "./Card.css";
function Card(props) {
  return (
    <div className="Card">
      <div>{props.condition}</div>
      <div>{props.date}</div>
      <div>{props.minTemp}</div>
      <div>{props.maxTemp}</div>
    </div>
  );
}

export default Card;
