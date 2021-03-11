import React from 'react'
import './AlbumTitle.css'


export const AlbumTitle = (props) => {
  return (

     <a className='album-title' href={props.albumContent.external_urls.spotify}>
      {props.albumContent.name}
      </a>        
    
  )
}