import React from "react";

const ImageCovers = (props) => {
  return (
    <div>
      {props.data.map((image) => (
       <img src={image.albums[0].images[0].url} alt="album image"></img>
      ))}
    </div>
  )
}

export default ImageCovers;