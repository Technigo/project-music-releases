import React from "react";

export const Artist = (props) => {
  return (
    <p className="artist">
      <a href={props.url}>{props.name}</a>
    </p>
  );
};
