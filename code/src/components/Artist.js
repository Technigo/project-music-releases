import React from "react";

const Artist = ({ artistLink, artistName }) => {
  return (
    <div className="artist-container">
      <a href={artistLink} target="_blank">
        <p>
          <span>{artistName} </span>{" "}
        </p>
      </a>
    </div>
  );
};

export default Artist;
