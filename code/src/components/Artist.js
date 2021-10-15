import React from "react";

export const Artist = (props) => {
  return (
    <a
      href={props.item.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h4 className="artist-name">{props.item.name} </h4>
    </a>
  );
};
