import React from 'react'

export const ReleaseTitle = (props) => {
  return (
    <a href={props.albumURL} className='title'>
      <p className='title'>{props.albumName}</p>
    </a>
  )
}