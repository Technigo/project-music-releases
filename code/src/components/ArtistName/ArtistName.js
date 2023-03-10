import React from "react";
import "./ArtistName.css";

const ArtistName = (props) => {
  return (
    <div>
      {props.singleArtistItem.artists.map((artist) => {
        console.log("log artist:", artist);
        return (
          <div>
            <a
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noreferrer noopener"
            >
              <h3 className="ArtistName">{artist.name}</h3>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ArtistName;