import React from "react";

const Artist = ({ artistLink, artistName }) => {
  return (
    <article className="artist-container">
      <a href={artistLink} target="_blank">
        <p className="artist-name">{artistName}</p>
      </a>
    </article>
  );
};

export default Artist;
