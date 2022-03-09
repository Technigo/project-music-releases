import React from 'react'
import Heart from '../icons/heart_white.svg'
import Play from '../icons/play_white.svg'
import Dots from '../icons/dots_white.svg'

export const Icons = () => {
  return (
    <div className="icon-container">
      <img className='icon heart' src={Heart} alt='heart icon'/>
      <img className='icon Play' src={Play} alt='play icon'/>
      <img className='icon Dot' src={Dots} alt='dots icon' />
    </div>
  )
}