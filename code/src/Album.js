import React from 'react'

export const Album = (props) => {
  return (
    <div>

      <div className="album-cover">
        <div className="icons">
          <img className="icon-heart" src="icons/heart.svg" alt="Heart" />
          <div>
            <a href={props.playIconURL}><img className="icon-play" src="icons/play.svg" alt="Play" /></a>
          </div>
          <img className="icon-dots" src="icons/dots.svg" alt="Dots" />
        </div>
        <img className="album-img" src={props.image} alt="Album" />
      </div>

      <div className="album-info">
        <div className="album-title">
          <a href={props.albumURL}>{props.albumTitle}</a>
        </div>
        <div className="artist-name">

          {props.artists.map((artist) => {

            return <span key={artist.external_urls.spotify}><a href={artist.external_urls.spotify}>{artist.name}</a><span>,&nbsp;</span></span>

          })}

        </div>

      </div>

    </div>

  )
}




