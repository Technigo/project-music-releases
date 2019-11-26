import React from 'react'
// import data from './data.json'

import "./components/album.css";

export const Album = (props) => {
  return (
    <section className="album-section">
      <div>
        <div className="cover">
        <div className="icons">
        <img className="heart" src="./icons/heart.svg" alt="Heart" />
        <a href={props.albumURL} alt="songURL"><img className="play" src="./icons/play.svg" alt="play" /></a>
        <img className="dots" src="./icons/dots.svg" alt="dots" />
        </div>
        <img className="cover-img" src={props.cover} alt="coverImg" />
        </div>
        <div className="album-name">
          <a href={props.albumURL}>{props.name}</a>
        
        </div>
        <div className="artist-name">
        <a href={props.artistURL}>{props.artist}</a>
          </div>
          </div>
      </section>
  )
}