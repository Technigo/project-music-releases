import React from "react";

const Artist = ({ artist, artistLink }) => {
  return (
    <a href={artistLink} target="_blank">
      <h3>{artist}</h3>
    </a>
  );
};

export default Artist;
