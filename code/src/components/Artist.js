import React from "react";

const Artist = (props) => {
  return (
    <>
      <div className="artist-container">
        {props.artistArray.map((artist, index) => {
          return (
            <a
              className="title-links"
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="artist-name">
                {artist.name}
                {props.artistArray.length - 1 > index ? ", " : " "}
              </h3>
            </a>
          );
        })}
      </div>
    </>
  );
};
export default Artist;
