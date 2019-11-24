import React from "react";
import "./css/image.css";

export const Image = props => {
  return (
    <img className="album-image" alt={props.title} src={props.images[0].url} />
  );
};
