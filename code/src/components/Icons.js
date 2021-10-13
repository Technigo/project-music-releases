import React from 'react'
import 'components/Icons.css'

export const Icons = props => {
  return (
    <div className='icons-container'>
      <img
        className='icon heart'
        src='/icons/heart.svg'
        alt='heart icon'
        style={{ width: '25px', zIndex: '1' }}
      />
      <img className='icon play' src='/icons/play.svg' alt='play icon' style={{ zIndex: '1' }} />
      <img
        className='icon dots'
        src='/icons/dots.svg'
        alt='dot icon'
        style={{ width: '20px', zIndex: '1' }}
      />
    </div>
  )
}
