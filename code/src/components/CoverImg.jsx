import React from 'react'

export const CoverImg = (props) => {

  return ( 
  <a href={props.item.external_urls.spotify}>
  <div className='cover-image-container'>

      <div className='cover-image' 
        style={{
        backgroundImage: `url(${props.item.images[0].url})`,
        backgroundSize: 'cover',
        aspectRatio: 1 / 1,
      }}
      >

            <div className='image-overlay'>
              <div className='icons-container'>
              <img className='heart-icon icons' src='/icons/heart.svg' alt='heart button'/>
              <img className='play-icon icons' src='/icons/play.svg' alt='play button'/>
              <img className='dots-icon icons' src='/icons/dots.svg' alt='dots button'/>
              </div>
            </div>

      </div>

  </div>
  </a>

      )      
};
