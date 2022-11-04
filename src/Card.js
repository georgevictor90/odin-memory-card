import React from "react";

const Card = (props) => {
  // console.log(props.id);
  return (
    <div
      key={props.id}
      id={props.id}
      onClick={props.handleClick}
      className="card"
    >
      <div
        style={{ backgroundImage: `url(${props.image})` }}
        className="card--image"
      ></div>

      <div className="card--text">{props.name}</div>
    </div>
  );
};

export default Card;
