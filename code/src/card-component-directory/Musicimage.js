import React from 'react';
import { ReactComponent as HeartIcon } from './icons/heart.svg';
import { ReactComponent as PlayIcon } from './icons/play.svg';
import { ReactComponent as DotIcon } from './icons/dots.svg';


// Component for the music item which will house the album image and icons
export const MusicImage = (prop) => {
    return (
        <div className="image-container">
            <div className="icons-container">
                <HeartIcon className="heart" />
                <PlayIcon className="play" />
                <DotIcon className="dot" />
            </div>
            <div className="album-image-hover">
                <img alt="album cover" src={prop.image[1].url} className="album-image"/> 
            </div>
        </div>  
    );
};


