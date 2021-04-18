import React from "react";

const AlbumImage = (props) => {
  const image = props.image.url;

  return (
    <div className="album-image-container">
      <img className="album-image" src={image} alt="Album"/>
    </div>
  );
};
  
  export default AlbumImage;