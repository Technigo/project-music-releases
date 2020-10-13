import React from 'react';



export const Album = (props) => {
    return (
        <div className='album-cover'>
            <div className='album-image'>
                <img src={props.item.images[1].url} alt='Album cover'></img>
                <div className="icons">      
                    <img className="heart-icon" src="/icons/heart.svg" alt="heart button"/>
                    <img className="play-button" src="/icons/play.svg" alt="play button"/>
                    <img className="dots-icon" src="/icons/dots.svg" alt="dots button"/>           
                </div>
            </div>
        </div>
    )
};
