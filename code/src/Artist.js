import React from 'react'

export const Artists = (props) => {
  return (
    <a className='artists' href={props.artistURL}>
      {props.artist}
    </a>
  )
}