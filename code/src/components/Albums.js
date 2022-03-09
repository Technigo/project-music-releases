import React from 'react'

export const Albums = (props) => {
  return (
    <div className='artistBox'>
      <div className='album-cover'>
        <img className='album-img' src={props.image} alt='Album' />
          </div>
          <div className='album-info'>
          <div className='album-title'>
            <a href={props.albumURL} target="_blank">{props.albumTitle}</a>
          <div className='artist-name'>
          <a href={props.artistURL} target="_blank">{props.artists}</a>
          </div>
        </div >
      </div >
    </div >
    )
} 
