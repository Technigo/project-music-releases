import React from 'react'
import './ReleaseTitle.css'

export const ReleaseTitle = props => {
  return (
    <a href={props.albumURL} className='release-title'>
      {props.albumName}
    </a>
  )
}