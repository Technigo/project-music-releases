import React from 'react'

export const AlbumText = (props) => {
  return (
    <div>
      <a href={props.items.artists[0].uri}>{props.items.artists[0].name}</a>
      <p>{props.items.name}</p>
    </div>
  )
}