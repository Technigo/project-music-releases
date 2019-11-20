import React from 'react'

export const Artist = (props) => {
  return (
    <p className="album-artist">
      <a href={props.artistUrl} className="album-artist-link">{props.artist}</a>
    </p >
  )
}