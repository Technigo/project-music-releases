import React from "react";

const Artist = (props) => {
  return (
    <a className="title-links" href={props.artistLink} target="_blank">
      <h3 className="artist-name">{props.artistName}</h3>
    </a>
  );
};

export default Artist;
