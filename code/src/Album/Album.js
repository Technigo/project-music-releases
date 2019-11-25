import React from "react";
import "./Album.css";
import { Logos } from "../Logos";

const Album = props => (
  <div className="albumCard">
    <div
      className="albumImg"
      style={{ backgroundImage: `url(${props.item.images[1].url})` }}
    >
      <div className="theLogos">
        <Logos />
      </div>
    </div>

    <div className="albumDetails">
      <a className="albumName" href={props.item.external_urls.spotify}>
        {props.item.name}
      </a>
      <a
        className="artistName"
        href={props.item.artists[0].external_urls.spotify}
      >
        {props.item.artists[0].name}
      </a>
    </div>
  </div>
);

export default Album;
