import React from 'react'
import Buttons from './Buttons.js'

//image needs an URL
const Album = (props) => {
  console.log(props)
    return (
      <div className="album-card">
          <div className="image-container">            
              <img className="album-image" src={props.imgsrc}></img>          
            <Buttons />
          </div>        
        <div className="album-information-container">
          <a className="url-link" href={props.url}>
            <h3 className="album-name">{props.name}</h3>
          </a>
        </div>

        {props.artist.map((artist) => {
          console.log(artist)  
          return <div key={artist.id} className="artist-container">
          <a
            className="artists-link"
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer">
            {artist.name}
            <span>,&nbsp;</span>
          </a>
          </div>
        })}
      </div>
    
    );
  }

  export default Album