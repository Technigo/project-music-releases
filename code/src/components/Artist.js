import React from "react";

export const Artist = (props) => {
  return (
    <a href={props.artistLink} target="_blank" rel="noopener noreferrer">
      <span>{props.artistName} </span>
    </a>
  );
};

