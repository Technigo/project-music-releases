import React from 'react'

export const MenuBtns = () => {
  return (
    <div className='buttons'>
      <button className='heart-button'> <img src='/icons/heart.svg' alt='heart symbol'/> </button>
      <button className='play-button'> <img src='/icons/play.svg' alt='play button'/> </button>
      <button className='dots-button'> <img src='/icons/dots.svg' alt='more button'/> </button>
    </div>
  )
}