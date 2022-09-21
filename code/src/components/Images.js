import React from "react";

const Images = (props) => {
  return (
    <img src={props.albumImage} className="images" alt={props.albumTitle} />
  );
};

export default Images;
