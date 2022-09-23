import React from "react";

const Artist = (props) => {
  return (
    <div>
      {props.artistArray.map((artist, index) => {
        return (
          <a
            className="title-links"
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="artist-name">{artist.name}</h3>
            {<span>{props.artistArray.length - 1 > index ? "," : ""}</span>}
          </a>
        );
      })}
    </div>
  );
};
export default Artist;
