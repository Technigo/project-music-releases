import React from 'react'

import Hover from 'components/Hover'

/* Rendering the content for album wrapper, importing hover effect and adding URLs */

export const Albums = (props) => {
  return (
    <div className='artistCard'>
      <div className="image-wrapper">
        <a href={props.albumURL}>
          <Hover />
        <div className='album-cover'>
          <img className='album-image' src={props.image} alt='Album' />
        </div>
        </a>
      </div>
      <div className='album-text'>
        <div className='album-name'>
          <a href={props.albumURL} 
          target="_blank" 
          rel="noopener noreferrer">
          {props.albumTitle}</a>
          <div className='artist-name'>
           <a href={props.artistURL} 
           target="_blank" 
           rel="noopener noreferrer">
            {props.artists}</a>
         </div>
        </div >
      </div >
    </div >
    )
} 
