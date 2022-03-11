import React from 'react'

import Heart from './assets/heart.svg'
import Dot from './assets/dots.svg'
import Play from './assets/play.svg'

import './Album.css'

export const Icons = () => {
   
    return (
        <div className='icons-container'>
            <img className='icon-heart' src= { Heart } alt='heart icon' />
            <img className='icon-play' src= { Play } alt='play icon' />
            <img className='icon-dots' src= { Dot } alt='dots icon' />
        </div>

    )
}
