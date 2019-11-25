import React from 'react'
import './Album.css';
import { Icons } from './Icons'

export const Album = props => {
  const { image, url, name } = props;
  return (
    <div className="poster">
      <div className="album-cover">
        </div>  
      
    <div className="release">
      <img className="artist-image" src={image} alt="images" />
      <div className="album-icons">
            <Icons />
        </div>
      </div>
      
      <a href={url}> <h4>{name}</h4> </a>
    </div>

    
  );
};