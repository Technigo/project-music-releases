import React from 'react'
import './Artists.css'

export const Artists = (props) => {
  console.log(props)
  return (
      <p className='artist-name'>
        Artist: {props.artistsContent.name}
      </p>
  )
}
