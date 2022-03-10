import React from "react";

const Artist = ({ artists }) => {
  return (
    <a href={artists.external_urls.spotify} className="artist-link" target="_blank" rel="noopener noreferrer">
      <span className="artist-name">{artists.name}</span>
    </a>
  )
}

export default Artist;