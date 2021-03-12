import React from 'react'

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
          </a>
          
          <div className="album-container">
          <h2>
            <a className="album-link" href={props.albumLink} target='_blank' rel="noopener noreferrer">
              {props.title}
            </a>
          </h2>
          </div>
          
          <div className="artist-container">
          <h2 className="artist-name">
            {props.artistName}
            </h2>
          </div>
       </div>
    )
  }