import React from "react";
import "./ArtistName.css";

export const ArtistName = (props) => {
  return (
    <div>
      {props.singleArtistItem.artists.map((artist) => {
        console.log("log artist:", artist);
        return (
          <div className="ArtistName">
            <a
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noreferrer noopener"
            >
              <h3>{artist.name}</h3>
            </a>
          </div>
        );
      })}
    </div>
  );
};
