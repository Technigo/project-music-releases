import React from 'react'

export const Artist = props => {
    return (
      <a href={props.url}>
        {props.name}
      </a>
    );
  };