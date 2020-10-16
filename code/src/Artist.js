import React from 'react'
import './artist.css'

export const Artists = props => {
  if ((props.artistArray).length > 1) {
    return (
      <a className='artists' href={props.artistURL}>
        {props.artist},
      </a>)
  }
  else {
    return (
      <a className='artists' href={props.artistURL}>
        {props.artist}
      </a>)
  }
}