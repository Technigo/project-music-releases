import React from "react";

import Icon from "./Icon";

const Images = (props) => {
  return (
    <div className="image-wrapper">
      <div className="image-container">
        <img src={props.albumImage} className="album-image" alt="album cover" />
        <Icon albumLink={props.albumLink} />
      </div>
    </div>
  );
};

export default Images;
