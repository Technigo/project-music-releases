import React from 'react'

export const Album = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <div className="album-info">
        <div className="album-title">
          {props.name}
        </div>
        <div className="artist-name">
          {props.artists}
        </div>
      </div>
    </div>

  )
}
