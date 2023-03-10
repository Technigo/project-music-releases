import React from 'react';
import { Icons } from './Icons';

export const CoverArt = (props) => {
  const imageUrl = props.images.find((image) => image.width === 300).url;
  return (
    <div className="btn-image-container">
      <div className="image-container">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img className="album-image" src={imageUrl} alt="album cover" />
        </a>
      </div>
      <Icons />
    </div>
  )
}
