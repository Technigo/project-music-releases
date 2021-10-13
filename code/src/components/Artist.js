import React from "react";

const Artist = (props) => {
  return (
    <div className="artist-banana">
      {props.item.artists.map((artist) => {
        return (
          <a
            className="artist-name-link"
            key={artist.id}
            href={artist.external_urls.spotify}
          >
            <h2>{artist.name} </h2>
          </a>
        );
      })}
    </div>
  );
};

export default Artist;
