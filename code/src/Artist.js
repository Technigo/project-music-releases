import React from "react";
import "./css/album.css";

export const Artist = props => {
  return (
    <h4 className="artist">
      <a href={props.url}>{props.name}</a>
    </h4>
  );
};
