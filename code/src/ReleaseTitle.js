import React from 'react'
import 'releaseTitle.css'

export const ReleaseTitle = props => {
  return (
    <a href={props.albumURL} className='release-title'>
      {props.albumName}
    </a>
  )
}