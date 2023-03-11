import React from "react";
import "./ArtistName.css";

export const ArtistName = (props) => {
  const artistNames = props.singleArtistItem.artists
    .map((artist) => {
      return artist.name;
    })
    .join(", ");

  return (
    <div className="ArtistName">
      <a
        href={props.singleArtistItem.external_urls.spotify}
        target="_blank"
        rel="noreferrer noopener"
      >
        <h3>{artistNames}</h3>
      </a>
    </div>
  );
};