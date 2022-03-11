import React from 'react'

import Heart from './assets/heart.svg' 
import Dots from './assets/dots.svg'
import Play from './assets/play.svg'

export const Icons = (props) => {
    /*link to album's Spotify url*/
    const url = props.url
    return (
        <div className='icons-container'>
            <img className='icon heart' src={Heart} alt='heart icon' />
            <a href={url} target='_blank' rel="noopener noreferrer"><img className='icon play' src={Play} alt='play icon' /></a>
            <img className='icon dots' src={Dots} alt='dots icon' />
        </div>
    )
}
