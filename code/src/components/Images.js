import React from "react";

const Images = (props) => {
    albumImage = {props.data.images[1].url}
  return (
    <img
      src={props.data.images[1].url}
      className="images"
      alt={props.album.name}
    />
  );
};

export default Images;
