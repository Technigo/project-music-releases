import React from 'react'
import Hover from 'components/Hover'

export const Albums = (props) => {
  return (
    <div className='artistCard'>
          <div class="image-wrapper">
      <a href={props.albumURL}>
        <Hover />
      <div className='album-cover'>
        <img className='album-image' src={props.image} alt='Album' />
      </div>
      </a>
          </div>
          <div className='album-text'>
          <div className='album-name'>
            <a href={props.albumURL} target="_blank">{props.albumTitle}</a>
          <div className='artist-name'>
          <a href={props.artistURL} target="_blank">{props.artists}</a>
          </div>
        </div >
      </div >
    </div >
    )
} 
