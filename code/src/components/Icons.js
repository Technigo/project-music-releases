import React from 'react'

import Heart from './assets/heart.svg' 
import Dots from './assets/dots.svg'
import Play from './assets/play.svg'

export const Icons = (props) => {

    return (
        <div className='icons-container'>
            <img className='icon heart' src={Heart} alt='heart icon' />
            <img className='icon play' src={Play} alt='play icon' />
            <img className='icon dots' src={Dots} alt='dots icon' />
        </div>
    )
}
