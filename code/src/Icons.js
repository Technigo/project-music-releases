import React from 'react';
import './icons.css';
import data from './data.json';

export const Icons = props => (
  <div>
    <div className="icons">
      <div className="iconsContainer">
        <img
          className="iconHeart"
          src="./icons/heart.svg"
          alt="Heart icon for favourite"
        />

        <a href={data.albums.items[0].external_urls.spotify}>
          <img
            className="iconPlay"
            src="./icons/play.svg"
            alt="Play icon to play song"
          />
        </a>

        <img
          className="iconDots"
          src="./icons/dots.svg"
          alt="Dots icon for more information"
        />
      </div>
    </div>
  </div>
);
