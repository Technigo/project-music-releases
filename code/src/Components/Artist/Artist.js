import React from "react";

export const Artist = props => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      {props.name}
    </a>
  );
};
