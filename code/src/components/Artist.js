import React from "react";

const Artist = (props) => {
  return (
    <>
      {props.artists.map((artist, index) => {
        if (index === 0) {
          return (
            <span className="artist-container">
              <a
                key={artist.id}
                className="artist-name"
                href={artist.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                {artist.name}
              </a>
            </span>
          );
        } else if (index !== 0) {
          if (
            index === props.artists.length - 1 &&
            props.artists.length !== 2
          ) {
            return (
              <span className="artist-container">
                &nbsp;&&nbsp;
                <a
                  key={artist.id}
                  className="artist-name"
                  href={artist.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {artist.name}
                </a>
              </span>
            );
          } else {
            return (
              <span className="artist-container">
                ,&nbsp;
                <a
                  key={artist.id}
                  className="artist-name"
                  href={artist.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {artist.name}
                </a>
              </span>
            );
          }
        }
      })}
    </>
  );
};

export default Artist;
