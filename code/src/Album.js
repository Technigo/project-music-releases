import React from 'react'

export const Album = (props) => {
  return (
    <div className="album">
      <img src={props.image} alt="" />
      <div className="album-name">
        {props.name}
      </div>
      <div className="artist-name">
        {props.artists}
      </div>

    </div>

  )
}
