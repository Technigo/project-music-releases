import React from "react";
import data from "./data.json";

export const Artist = props => {
  return (
    <a className="artist" href={props.link}>
      {props.name}
    </a>
  );
};
