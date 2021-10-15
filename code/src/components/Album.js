import React from 'react';
import Artist from './Artist'

const Album = (props) => {

  return (
    //Here we import artistUrl and artistName from Artist.js. In the next step we export url, albumUrl, title and artist to App.js.
    //"artist" is an array in the data.json. That's why we need to loop over it to get several artist and urls
    <article className="album">

      <div className="image-icons-container">
        <div className="image-container">
         <img src={props.url} alt="Album cover" />
        </div>
        <div className="icons-container">
          <img className="icons" src="./icons/heart.svg" alt="heart-icon" />
          <img className="play-icon" src="./icons/play.svg" alt="play-icon" />
          <img className="icons" src="./icons/dots.svg" alt="three dots-icon" />
        </div>
      </div> 

      <a 
        className="album-title" 
        href={props.albumUrl} 
        target="_blank" 
        rel="noopener noreferrer">{props.title}
      </a>
      
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