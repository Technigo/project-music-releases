import React from 'react';

export const ArtistName = (props) => {
  console.log('artist', props)
  return (
    <a href={props.link} target="_blank" key={props.id} rel="noreferrer">
      <h3>{props.name}</h3>
    </a>
  )
}

export default ArtistName;