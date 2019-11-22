import React from "react";
import "./Album.css";
import { PlayIcon } from "../PlayIcon/PlayIcon";

export const Album = props => {
  const { image, url, name } = props;
  return (
    <div>
      <div className="img_icons">
        <img className="artist_image" src={image} alt="Album images" />
        <PlayIcon></PlayIcon>
      </div>
      <a href={url} target="_blank">
        <h4>{name}</h4>
      </a>
    </div>
  );
};
