import React from "react";
import "./css/albumArt.css";

export const AlbumArt = props => {
  return <div className="album-art">{props.children}</div>;
};
