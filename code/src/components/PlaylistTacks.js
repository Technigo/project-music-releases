import React from "react";

const PlaylistTracks = ({ track, trackUrl }) => {
  return (
    <a href={trackUrl} target="_blank" rel="noopener noreferrer">
      <h2>{track}</h2>
    </a>
  );
};

export default PlaylistTracks;
