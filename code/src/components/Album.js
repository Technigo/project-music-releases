import React from 'react';
import Artist from './Artist'

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
      <a className="album-title" href={props.albumUrl} target="_blank">{props.title}</a>
      <div className="artist-name-container">
          {props.artist.map((artist) => (
            <Artist 
            key={artist.name} 
            artistName={artist.name}
            artistUrl={artist.external_urls.spotify}
             />
          ))} 
      </div>
    </article>
  )
}

export default Album