import React from "react";

export const Albumcard = (props) => {
  return (
    <article className="album-container">
      <img alt={props.name} className="song-img" src={props.image} />
      <h2 className="album-name">{props.name}</h2>
      <h3 className="artist">{props.artist}</h3>
    </article>
  );
};
