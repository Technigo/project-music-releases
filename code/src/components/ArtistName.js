import React from "react";

const ArtistName = (props) => {
  console.log(props.artists);
  return (
    <section className="artist-container">
      {props.artists.map((artist) => {
        return (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={artist.external_urls.spotify}
            className="artist-link"
            key={artist.id}
          >
            <div className="artist-name">
              <h3 key={artist.id}>{artist.name}</h3>
            </div>
          </a>
        );
      })}
    </section>
  );
};

export default ArtistName;
