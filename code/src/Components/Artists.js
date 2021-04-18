import React from "react";

const Artists = (props) => {
  const artistName = props.artistName;
  const artistUrl = props.artistUrl;
  
  return (
    <span className="inner-artist-container">
      <a className="artist" href={artistUrl}>
        {artistName}
      </a>
    </span>
  );
};

export default Artists;