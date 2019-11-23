import React from "react";
import "./Album.css";
import { Logos } from "./Logos";

export const Album = props => (
  <div className="albumCard">
    <div className="albumHead">
      <div
        className="albumImg"
        style={{ backgroundImage: `url(${props.item.images[1].url})` }}
      >
        <div className="theLogos">
          <Logos />
        </div>
      </div>
    </div>
    <a href="#">{props.item.name}</a>
  </div>
);
