import React from 'react';
import './Icons.css';

export const Icons = () => {
    return (
        <div className="iconsContainer">
            <img className="hearticon" src="./icons/heart.svg" alt="heart icon" />
            <img className="playicon" src="./icons/play.svg" alt="play icon" />
            <img className="dotsicon" src="./icons/dots.svg" alt="dots icon" />
        </div>
    )
}