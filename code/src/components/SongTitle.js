import React from "react";

const SongTitle = ({ title, titleLink }) => {
  return (
    <a href={titleLink} target="_blank">
      <h2>{title}</h2>
    </a>
  );
};

export default SongTitle;
