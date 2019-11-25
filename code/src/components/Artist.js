import React from 'react'
import './Album.css';

export const Artist = props => {
    return (
      <a href={props.url}>
        {props.name}
      </a>
    );
  };