import React from 'react';
import likeBtn from 'icons/heart.svg';
import playBtn from 'icons/play.svg';
import moreBtn from 'icons/dots.svg';


export const Buttons = () => {
    return (
        <div className='buttons'>
            <button className='icon'>
              <img src={likeBtn} alt='Like Button'/>
            </button>
            <button className='icon'>
             <img src={playBtn} alt=' Play Button'/>
            </button>
            <button className='icon'>
              <img src={moreBtn} alt='More Button'/>
            </button>
        </div>
    );
}