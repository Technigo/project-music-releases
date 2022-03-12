import React from "react";


export const Artist = (props) => {
    return (
      <a
        className="artist-container"
        href={props.artistUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.artistName}
      </a>
    );
  };
