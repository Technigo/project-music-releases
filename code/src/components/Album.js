import React from 'react';
import { Artist } from './Artist';

export const Album = (props) => {
  return (
    <div className="album-box">
      <a href={props.album.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="album-link">
        <div className="album-cover">
          <img className="album-cover-image" src={props.album.images[0].url} alt={props.album.name} />

          <div className="album-overlay">
            <div className="album-buttons">
              <img src="icons/heart.svg" alt="heart" className="icon-heart" />
              <img src="icons/play.svg" alt="play" className="icon-play" />
              <img src="icons/dots.svg" alt="dots" className="icon-dots" />
            </div>
          </div>
        </div>
      </a>
      <a className="album-name" href={props.album.external_urls.spotify} target="_blank" rel="noopener noreferrer">{props.album.name}</a>
      <Artist artist={props.album.artists} />
    </div>
  )
};

