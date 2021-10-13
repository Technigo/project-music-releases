import React from "react";

const Artist = ({ artistName, artistLink }) => {
  return (
    <div className="artist-names">
      <a href={artistLink}>
        <p>{artistName}</p>
      </a>
    </div>
  );
};

export default Artist;
