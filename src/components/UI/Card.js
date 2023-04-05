import "./Card.css";
function Card(props) {
  const classes = "card " + props.className; //문자열

  return <div className={classes}>{props.children}</div>;
}
export default Card;
