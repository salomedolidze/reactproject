import "./TripStyles.css";
import React from "react";
import trip1 from "../assets/image/trip1.jpg";
import trip2 from "../assets/image/trip2.jpg";
import trip3 from "../assets/image/trip3.jpg";

const TripData = (props) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="image" src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default TripData;
