import React from 'react';

import Dots from './icons/dots.svg';
import Heart from './icons/heart.svg';
import Play from './icons/play.svg';

const Image = (props) => {
  return (
    <div className="image-container">
      <img className="image" src={props.image} alt="Cover of the Album"/>
      <div className="icon-container">
        <img 
          src={Heart}
          width="25"
          alt="heart"
        />
        <div className="play-container">
          <img 
            className="play"
            src={Play}
            width="50"
            alt="play"
          />
        </div>
        <img 
          src={Dots}
          width="20"
          alt="dots"
        />
      </div>
    </div>
    )
  }

export default Image;