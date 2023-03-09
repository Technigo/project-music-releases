import React from 'react';

export const ArtistName = (props) => {
  console.log('artist', props)
  return (
    <div className="artist-name">
      <a href={props.link} target="_blank" key={props.id} rel="noreferrer">
        <h3>{props.name}</h3>
      </a>
    </div>
  )
}

export default ArtistName;