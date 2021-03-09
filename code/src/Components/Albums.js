import React from 'react'
import data from 'data.json'
import './Albums.css'
import { Artists } from './Artists'

export const Albums = (data) => {

  return ( 
    <>
      <div className="album-container">
        <img className="album-image" src="https://via.placeholder.com/300" alt="Album cover"/>
        {/* <img src={data.url} alt={data.name}></img> */}
        <div className="icons-container">
          <div className="icons">
            <img className="icon-heart" src="icons/heart.svg"/>
            <img className="icon-play" src="icons/play.svg"/>
            <img className="icon-dots" src="icons/dots.svg"/>
          </div>
        </div>
      </div>
      <div>
        <p className='album-title'>
          <strong>Album title</strong>
        </p>
          <Artists />
      </div>
    </>
  );
}
