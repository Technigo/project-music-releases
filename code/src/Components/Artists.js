import React from 'react'
import './Artists.css'

export const Artists = (props) => {

  return (
      <>
        {props.albumContent.artists.map((artists) => {
          return <div key={artists.id} className="artists">Artist: {artists.name}</div>
        })}
      </>
  )
}
