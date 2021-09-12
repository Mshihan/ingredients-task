import React from "react";
import "./Card.css";

const Card = (props) => {
  return <div class="card-body">{props.children}</div>;
};

export default Card;
