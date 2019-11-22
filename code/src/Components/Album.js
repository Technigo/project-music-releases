import React from "react";

export const Album = props => {
  return (
    <div className="albumContainer">
      <img
        src={props.album.images[1].url}
        alt="album-cover"
        className="albumCover"
      />
      <h2>{props.album.name}</h2>
      <div className="artistContainer">
        {props.album.artists.map(artist => (
          <h3>{artist.name}</h3>
        ))}
      </div>
    </div>
  );
};
