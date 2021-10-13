import React from 'react'

export const Icons = props => {
  return (
    <div className='icons-container'>
      <img className='heart-icon' src='/icons/heart.svg' alt='heart icon' style={{ width: '25px', zIndex: '1' }} />
      <img className='play-icon' src='/icons/play.svg' alt='play icon' style={{zIndex: '1' }} />
      <img className='dots-icon' src='/icons/dots.svg' alt='dot icon' style={{ width: '20px', zIndex: '1' }} />
    </div>
  )
}


// width: '50px'