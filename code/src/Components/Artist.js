import React from 'react'

export const Artist = (props) => {
  return (
    <div className="artist">
      <a href={props.url} className="artist-name">{props.name}</a>
    </div>
  )
}