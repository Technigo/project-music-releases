import React from "react";

const Artist = ({ artistLink, artistName }) => {
  return (
    <div className="artist-container">
      <a href={artistLink} target="_blank" rel="noopener noreferrer">
        <p>
          <span>{artistName}&nbsp;</span>
        </p>
      </a>
    </div>
  );
};

export default Artist;
