import React from "react";

const Artists = ({ artists }) => {
  const concatenator = (i) => {
    return i < artists.length - 2 ? ", " : i < artists.length - 1 ? " & " : "";
  };

  return (
    <>
      {artists.map((artist, i) => (
        <span key={artist.id}>
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {artist.name}
          </a>
          {concatenator(i)}
        </span>
      ))}
    </>
  );
};

export default Artists;
