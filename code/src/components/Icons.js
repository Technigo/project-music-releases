import React from 'react'
import './Icons.css'

export const Icons = props => {
  return (
    <div className='icons-container'>
      <img className='icon heart' src='/icons/heart.svg' alt='heart icon' />
      <img className='icon play' src='/icons/play.svg' alt='play icon' />
      <img className='icon dots' src='/icons/dots.svg' alt='dot icon' />
    </div>
  )
}
