import React from "react";
import Icon from "./Icon";

const Images = (props) => {
  return (
    <div className="image-wrapper">
      <a
        className="linked-album"
        href={props.albumLink}
        target="_blank"
        alt="link to album"
      >
        <div className="image-container">
          <img
            src={props.albumImage}
            className="album-image"
            alt="album cover"
          />
          <Icon />
        </div>
      </a>
    </div>
  );
};

export default Images;
/*{props.albumLink}*/
