import React from 'react'

export const Artist = (props) => {
  return (
    <span className="album-artist">
      <a href={props.url} className="album-artist-link">{props.name}</a>
    </span >
  )
}