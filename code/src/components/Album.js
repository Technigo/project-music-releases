import React from "react";

export const Album = (props) => {
  return (
    <div className="album">
      <img
        className="album-cover"
        src={props.item.images[1].url}
        alt="album cover"
      />
      <h3 className="album-title">
        <a href={props.item.external_urls.spotify}>{props.item.name}</a>
      </h3>

      <h4 className="artist-name">
        <a href={props.item.artists[0].external_urls.spotify}>
          {props.item.artists[0].name}
        </a>
      </h4>
    </div>
  );
};
