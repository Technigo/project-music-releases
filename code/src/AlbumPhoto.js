import React from 'react'
import Heart from './icons/heart.svg'
import Play from './icons/play.svg'
import Dots from './icons/dots.svg'

const AlbumPhoto=(props) => {
    return(
        <div className='image-container'>
            <div className='button-container'>
            <button>
                <img className='icon' src={Heart} alt='Heart icon'/>
            </button>
            <button>
                <img className='icon' src={Play} alt='Play icon'/>
            </button>
            <button>
                <img className='icon' src={Dots} alt='Dots icon'/>
            </button>
            </div>
            <img src= {props.photo} alt=""/>
        </div>
    )
} 

export default AlbumPhoto
