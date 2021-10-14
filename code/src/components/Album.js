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
          <img class="icons" src="./icons/heart.svg" alt="heart-icon" />
          <img class="play-icon" src="./icons/play.svg" alt="play-icon" />
          <img class="icons" src="./icons/dots.svg" alt="three dots-icon" />
        </div>
      </div> 
      <a className="album-title" href={props.albumUrl} target="_blank" rel="noopener noreferrer">{props.title}</a>
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