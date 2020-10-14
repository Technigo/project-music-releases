import React from 'react'
import 'Artist.css'

export const Artists = (props) => {
  return (
    <a className='artists' href={props.artistURL}>
      {props.artist}
    </a>
  )
}