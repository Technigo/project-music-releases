import React from "react";

export const Artist = (props) => {
    return (
      <a
        className="artist-name"
        href={props.artist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer">
        {props.artist.name}
      </a>
    );
  };
