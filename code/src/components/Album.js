import React from 'react'

// Contructing the album with props

export const Album = (props) => {
    return (
      <div className="album">
        <a href={props.albumLink} target='_blank' rel="noopener noreferrer">
          <div className="cover-container">
            <img src={props.cover} alt='album cover' className="cover" />
            <div className="icons-container">
              <img className="heart-icon" src="/icons/heart.svg" alt='' />
              <img className="play-icon" src="/icons/play.svg" alt='' />
              <img className="dots-icon" src="/icons/dots.svg" alt='' />
            </div>
          </div>
          <h2 className="album-title"> {props.name} </h2>
        </a>
        <a className="artist_container" href={props.artistLink} target='_blank' rel="noopener noreferrer">
          <h2 className="artist-name"> {props.artists}</h2>
        </a>
       </div>
    )
  }