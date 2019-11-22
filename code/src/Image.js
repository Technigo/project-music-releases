import React from "react";
import "./css/image.css";
// import { tsPropertySignature } from "@babel/types";

export const Image = props => {
  return (
    <img
      className="album-image"
      alt={props.title}
      src={props.images[0].url}
      // srcSet={props.images
      //   .map(image => `${image.url} ${image.width}w`)
      //   .join(", ")}
    />
  );
};

// <img srcset="{url1} {width1}w, {url2} {width2}" class="album-image" />
