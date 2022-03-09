import React from "react";

import { Icons } from "../components/Icons";

export const Album = (props) => {
  return (
    <div className="album-cover">
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <img src={props.image} alt="Album Cover" className="album-img" />
        <Icons />
      </a>

      <div className="album">
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <p className="albumTitle">{props.title}</p>
        </a>
      </div>
    </div>
  );
};
