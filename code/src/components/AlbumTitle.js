import React from 'react';

export const AlbumTitle = (props) => {
  console.log('artist', props)
  return (
    <span className="album-name">
      <a href={props.link} target="_blank" rel="noreferrer" className="album-name-link">
        <h2 className="album-name-h2">{props.name}</h2>
      </a>
    </span>
  )
}

export default AlbumTitle;
