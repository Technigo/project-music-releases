import React from 'react';
import dotsIcon from './icons/dots.svg'
import heartIcon from './icons/heart.svg'
import playIcon from './icons/play.svg'

export const AlbumCover = (props) => {
    return (
        <div className='AlbumCoverContainer'>
          <img src={props.cover} className='AlbumCover' alt="album-cover" />
          <div className='IconContainer'> 
          <img src={heartIcon} className='Icons' />
          <img src={playIcon} className='Icons' />
          <img src={dotsIcon} className='Icons' />
          </div>
        </div >
      );
}