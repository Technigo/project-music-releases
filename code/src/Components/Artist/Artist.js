import React from "react";

export const Artist = props => {
  return (
    <a href={props.url} target="_blank">
      {props.name}
    </a>
  );
};
