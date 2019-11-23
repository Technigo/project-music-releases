import React from 'react'

export const Album = (props) => {
  return (
   <div className='album-container'>
      <img className='album-img' src={props.image} alt='Album'/>
   
      <div className='artist-info'>
        <h1 className='album-title'> 
        
        <h1 className='artist-name'>{props.artists}</h1>
        <a href={props.albumURL}>{props.albumTitle}</a>
        </h1>
        
    </div>
   </div>
  )
}
