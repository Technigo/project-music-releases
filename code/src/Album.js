import React from 'react'
// import data from './data.json'

import "./components/album.css";

export const Album = (props) => {
  return (
    <section className="album-section">
      <div>
        <div className="cover">
      
          <img src={props.cover} />
          
          <div className="icons">
          <img src="./icons/heart.svg" />
          <img src="./icons/play.svg" />
            <img src="./icons/dots.svg" />
            </div>
      </div>
      <div className="album-name">
        <h2>{props.name}</h2>
        </div>
      <div className="artist-name">
        <h3>{props.artist}</h3>
        </div>
        </div>
    </section>
  )
}