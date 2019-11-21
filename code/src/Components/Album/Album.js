import React from "react";
import "./Album.css";
// import { PlayIcon } from './PlayIcon'

export const Album = props => {
  const { image, url, name } = props;
  return (
    <div>
      <img src={image} alt="Album images" />
      <a href={url} target="_blank">
        <h4>{name}</h4>
      </a>
      {/* <PlayIcon streamURL={}></PlayIcon> */}
    </div>
  );
};
