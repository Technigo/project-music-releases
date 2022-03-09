import React from "react";

import { Icons } from "./Icons";

export const Album = (props) => {
  return (
    <div>
      <div class="image-container">
        <a href={props.url}>
          <Icons />
          <img src={props.img} alt="Album cover" className="album-cover" />
        </a>
      </div>
      <a href={props.url}>
        <p className="albums"> {props.name}</p>
      </a>
    </div>
  );
};
