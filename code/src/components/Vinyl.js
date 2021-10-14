import React from 'react'
import Artists from './Artists'

// first we do an album/vinyl
const Vinyl = (props) => {
  return (
    <article className="vinyl-card">
      <div className="play-container">
        <img src="/icons/play.svg" alt="play" className="icons play" />
      </div>
      <div className="icon-container">
        <img src="/icons/heart.svg" alt="heart" className="icons" />
        <img src="/icons/play.svg" alt="play" className="icons hide" />
        <img src="/icons/dots.svg" alt="dots" className="icons" />
      </div>
      <img className="album-cover" src={props.cover} alt="album artwork" />

      <a href={props.titleUrl} target="_blank" rel="noopener noreferrer">
        <h2 className="song-title">{props.song}</h2>
      </a>
      <div className="artist-wrapper">
        <Artists artistList={props.artist} />
      </div>
    </article>
  )
}

export default Vinyl
