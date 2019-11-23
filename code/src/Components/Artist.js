import React from 'react'

export const Artist = (props) => {
  return (
  <h1 className='artist-info'>
    <a href={props.url} className='artist-name'>{props.name}</a>
  </h1>
  )
}

