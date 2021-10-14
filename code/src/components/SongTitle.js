import React from "react";

const SongTitle = ({ title, titleLink }) => {
  return (
    <a href={titleLink} target="_blank" className="song-link">
      <h2 className="song-title">{title}</h2>
    </a>
  );
};

export default SongTitle;
