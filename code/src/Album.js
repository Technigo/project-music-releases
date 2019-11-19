import React from 'react'

// console.log(data.albums.items[1])



export const Album = (props) => {
  return (
    <div className="album">
      <img src={props.image} />
      <div>
        {props.name}
      </div>
    </div>

  )
}
