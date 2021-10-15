import React from 'react'
// import './AlbumName.css'

export const AlbumName = props => (
  <p key={props.item.name + props.item.id} className='album-name'>
    <a href={props.item.external_urls.spotify} target='_blank' rel='noopener noreferrer'>
      {props.item.name}
    </a>
  </p>
)
