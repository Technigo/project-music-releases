import React from 'react'

export const AlbumArt = (props) => {
  return (
    <div>
      <img src={props.items.images[0].url} alt="Album Cover"></img>
    </div>
  )
}