import React from 'react';
/* import { ReactComponent as DotsIcon } from './code/public/icons/dots.svg'
import { ReactComponent as HeartIcon } from './public/icons/heart.svg'
import { ReactComponent as PlayIcon } from './public/icons/play.svg' */

export const AlbumCover = (props) => {
    return (
        <div>
          <img src={props.cover} className='AlbumCover' alt="album-cover" />
          {/* <div className='IconContainer'> 
          { <HeartIcon className="heartIcon" />
          <PlayIcon className="playIcon" />
          <DotsIcon className="dotsIcon" />
          </div> } */}
        </div >
      );
}