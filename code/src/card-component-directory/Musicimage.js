import React from 'react';
import { ReactComponent as Hearticon } from './icons/heart.svg';
import { ReactComponent as Playicon } from './icons/play.svg';
import { ReactComponent as Doticon } from './icons/dots.svg';


// Component for the music item which will house the album image, album title and artist name
export const Musicimage = (prop) => {
    return (
        // Musicimage will only return one image tag 
        <div className="image-container">
            <div className="icons-container">
                <Hearticon className="heart" />
                <Playicon className="play" />
                <Doticon className="dot" />
            </div>
            <div className="album-image-hover">
                <img alt="album cover" src={prop.image[1].url} className="album-image"/> 
            </div>
        </div>  
    );
};


