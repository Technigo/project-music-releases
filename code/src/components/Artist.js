import React from "react";

import "./artist.css";

export const Artist = (props) => {
  return (
    <a className="artist" href={props.url}>
      {props.name}
    </a>
  );
};
