import React from 'react'

export const Album = (props) => {
  return (
    <div className="album">
      <img src={props.image} />
      <div>
        {props.name}
      </div>
      <div>
        {props.artists}
      </div>

    </div>

  )
}
