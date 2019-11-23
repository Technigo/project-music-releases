import React from 'react'
import './Album.css'

export const Album = (props) => (
    <div className="albumContainer">
        <img className='albumImg' src={props.image} alt='Album Cover' />
        <div className="moreDetails">
            <h1>{props.name}</h1>
            <h3>{props.artists}</h3>
        </div>
    </div>
)