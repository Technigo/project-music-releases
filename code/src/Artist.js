import React from "react";
import "./css/artist.css";
// import { directive } from "@babel/types";

export const Artist = props => {
  return <h4 className="artist">{props.name}</h4>;
};
