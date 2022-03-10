import React from "react";

const Artist = ({ artists }) => {
  return (
    <a href={artists.external_urls.spotify} className="artist-link" target="_blank" rel="noopener noreferrer">
      <p className="artist-name">{artists.name}</p>
    </a>
  )
}

export default Artist;