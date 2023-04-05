import "./Card.css";
const Card = (props) => {
  const classes = "card " + props.className; //문자열

  return <div className={classes}>{props.children}</div>;
};
export default Card;
