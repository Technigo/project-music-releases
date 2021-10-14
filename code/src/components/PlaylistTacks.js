import React from "react";

const PlaylistTracks = ({ track, trackUrl }) => {
  return (
    <a href={trackUrl} target="_blank" rel="noopener noreferrer" className="song-link">
      <h2 className="song-title">{track}</h2>
    </a>
  );
};

export default PlaylistTracks;
