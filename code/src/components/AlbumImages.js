import React from 'react';
import { AlbumButtons } from './AlbumButtons';

export const AlbumImages = (props) => {
  return (
    <div className="album-cover-picture">
      <div className="overlay">
        <AlbumButtons />
      </div>
      <img className="album-cover-image" src={props.imagesInput[1].url} alt="album cover" />
    </div>

  )
}