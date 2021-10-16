import React from 'react'
import Artists from './Artists'
import Icons from './Icons'

// first we do an album/vinyl
const Vinyl = (props) => {
  return (
    <article className="vinyl-card">
      <Icons link={props.titleUrl} />
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
