import React from 'react'

export const Artist = (props) => {
  return (
    <p className="album-artist">
      <a href={props.url} className="album-artist-link">{props.name}</a>
    </p >
  )
}