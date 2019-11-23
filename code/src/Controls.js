import React from "react";
import { Dots } from "./Dots";
import { Heart } from "./Heart";
import { Play } from "./Play";
import "./css/controls.css";

export const Controls = props => {
  return (
    <div className="album-controls">
      <Heart />
      <a href={props.playUrl}>
        <Play />
      </a>
      <Dots />
    </div>
  );
};
