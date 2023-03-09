import React from 'react';

const Album = (props) => {
  return (
    <article className="card">
      <div className="linked-album">
        <a href={props.albumLink} target="_blank" rel="noopener noreferrer">
          <div className="album-art">
            <div className="icon-container">
              <img
                className="icon"
                src="./icons/heart.svg"
                alt="heart button" />
              <img
                className="icon"
                src="./icons/play.svg"
                alt="play button" />
              <img
                className="icon"
                src="./icons/dots.svg"
                alt="more button" />
            </div>
            <img className="albumArt" src={props.img} alt={props.albumName} />
          </div>
          <h2 className="albumName">{props.albumName}</h2>
        </a>
      </div>
      <h3 className="artistName">
        {props.artists.map((artist) => {
          return (
            <a className="artist-link" href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
              <span className="artistName">{artist.name}</span>
            </a>
          )
        })}
      </h3>
    </article>

  )
};

export default Album;
