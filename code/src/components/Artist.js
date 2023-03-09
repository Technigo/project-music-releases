import React from 'react';

export const Artist = (props) => {
  return (
    <p>
      {props.artists.map((artist) => (
        <span>{artist.name}</span>
      ))}
    </p>
  )
}