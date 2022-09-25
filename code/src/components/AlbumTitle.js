import React from "react";

const AlbumTitle = (props) => {
  return (
    <>
      <a className="title-links" href={props.albumLink} target="_blank">
        <h2 className="album-title">{props.albumTitle}</h2>
      </a>
    </>
  );
};

export default AlbumTitle;
