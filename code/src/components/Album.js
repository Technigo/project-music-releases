import React from 'react';
import Artist from './Artist'
import data from '../../src/data'


const Album = (props) => {
  console.log(props);

  return (
    <article className="album">
      <div class="image-icons-container">
        <div class="image-container">
         <img src={props.url} alt="Album cover" />
        </div>
        <div class="icons-container">
          <img class="icons" src="./icons/heart.svg" />
          <img class="play-icon" src="./icons/play.svg" />
          <img class="icons" src="./icons/dots.svg" />
        </div>
      </div> 
      <h2>{props.title}</h2>
      <div className="artist-name-container">
        <p className="artist"> 
        {props.artist.map((artist) => (
          <Artist key={artist.name} artistName={artist.name} />
        ))}
        </p>
      </div>
    </article>
  )
}

export default Album