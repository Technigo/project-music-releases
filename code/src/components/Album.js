import React from 'react';
import { Artist } from './Artist';

export const Album = (props) => {
  console.log(props)
  return (
    <div className="album-card">
      <a href={props.album.external_urls.spotify} className="album-link">
        <div className="album-cover">
          <img className="album-cover-image" src={props.album.images[0].url} alt={props.album.name} />

          <div className="album-overlay">
            <div className="album-controls">
              <img src="icons/heart.svg" alt="heart" className="icon-heart" />
              <img src="icons/play.svg" alt="play" className="icon-play" />
              <img src="icons/dots.svg" alt="dots" className="icon-dots" />
            </div>
          </div>
        </div>
      </a>
      <span style={{ color: '#a0a0a0' }}><a href={props.album.external_urls.spotify} className="album-name">{props.album.name}</a> ({props.album.release_date})</span>
      <Artist key={props.album.artists[0].id} artist={props.album.artists} />
    </div>
  )
};