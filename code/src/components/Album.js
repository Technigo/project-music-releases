import React from "react";
import { Artist } from "./Artist";

export const Album = (props) => {
  // console.log(artistList);
  return (
    <div className="album">
      <div className="album-cover-wrapper">
        <img
          className="album-cover"
          src={props.item.images[1].url}
          alt="album cover"
        />
        <div className="icons">
          <img className="heart-icon" src="/icons/heart.svg" alt="heart icon" />
          <img className="play-icon" src="/icons/play.svg" alt="play icon" />
          <img className="dots-icon" src="/icons/dots.svg" alt="dots icon" />
        </div>
      </div>
      <h3 className="album-title">
        <a
          href={props.item.external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.item.name}
        </a>
      </h3>
      <Artist key={props.item.id} artistList={props.artist} />;
    </div>
  );
};
