import React from 'react';

export const Artist = (props) => {
  return (
    <a href={props.link} target="_blank" className="artist-container" key={props.id} rel="noreferrer">
      <h3>{props.name}</h3>

    </a>

  )
}
