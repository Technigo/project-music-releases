import React from "react";
import { Artist } from "./Artist";

export const Album = (props) => {
  return (
    <div className="album">
      <div className="album-cover-wrapper">
        <img
          className="album-cover"
          src={props.item.images[1].url}
          alt="album cover"
        />
        <div className="icons">
          <img className="heart-icon" src="/icons/heart.svg" />
          <img className="play-icon" src="/icons/play.svg" />
          <img className="dots-icon" src="/icons/dots.svg" />
        </div>
      </div>
      <h3 className="album-title">
        <a href={props.item.external_urls.spotify} target="_blank">
          {props.item.name}
        </a>
      </h3>

      {props.item.artists.map((item) => {
        return <Artist key={item.id} item={item} />;
      })}
    </div>
  );
};
