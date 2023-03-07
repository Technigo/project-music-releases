import React from 'react'

const AlbumName = ({ title, link }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <p className="song-title">{title}</p>
    </a>
  )
}

export default AlbumName;

// target="_blank" == open in new tab.
// rel="noopener noreferrer" == target resource won’t know where the visitor came from