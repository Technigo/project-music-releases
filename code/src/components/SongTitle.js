import React from "react";

const SongTitle = ({ title, titleLink }) => {
  return (
    <a
      href={titleLink}
      target="_blank"
      rel="noopener noreferrer"
      className="song-link"
    >
      <h2 className="song-title">{title}</h2>
    </a>
  );
};

export default SongTitle;
