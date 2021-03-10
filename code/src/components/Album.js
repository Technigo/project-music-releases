  import React from 'react';

  export const Album = (props) => {
    return (
      <div className="album-card">
        <div className="album-cover">
          <div className="icons">
            <img className="heart-button" src="icons/heart.png" alt="" />
            <img className="play-button" src="icons/play.png" alt="" />
            <img className="dots-button" src="icons/dots.png" alt="" />
          </div>
          <a href={props.albumurl} className="album-img-hover" target="_blank" rel="noopener noreferrer">
            <img src={props.imgsrc} alt="" className="album-cover-img" />
          </a>
        </div>
  
        <div>
          <h3>{props.name}</h3>
        </div>
  
        <div className="album-artists">
          {props.artists.map((artist) => {
            return <a
              key={artist.id}
              className="artists-link"
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer">
              {artist.name}
              <span>,&nbsp;</span>
            </a>
          })}
        </div>
      </div>
    );
  };
  