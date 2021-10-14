import React from "react";

const Artist = ({ artist, artistLink }) => {
  return (
    <a href={artistLink} target="_blank" className="artist-link">
      <h2 className="artist-title">{artist}</h2>
    </a>
  );
};

export default Artist;
