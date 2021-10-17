import React from "react";

import "./artist.css";

//Here's the component to extract the artist information
export const Artist = (props) => {
  console.log(props);
  return (
    <a className="artist-title" href={props.item.external_urls.spotify}>
      {props.item.name}
    </a>
  );
};
