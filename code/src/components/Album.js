import React from 'react';

export const Album = (props) => {
  return (
    <div className="album-card">
      <div className="album-cover">
        <div className="icons">
          <img className="btn-heart icon" src="icons/heart.png" alt="" />
          <img className="btn-play icon" src="icons/play.png" alt="" />
          <img className="btn-dots icon" src="icons/dots.png" alt="" /> 
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


/* We do a .map on artists to be able to get all the artists names who
are involved, since the names are inside an array of objects */

export default Album
