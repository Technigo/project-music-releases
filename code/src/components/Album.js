import React from 'react';

const Album = (props) => {
  return (
    <article className="card">
      <div className="linked-album">
        <div className="icon-container">
          <img
            className="icon"
            src="../public/icons/heart_white.svg"
            alt="heart button" />
          <img
            className="icon"
            src="../public/icons/play_white.svg"
            alt="play button" />
          <img
            className="icon"
            src="../public/icons/dots_white.svg"
            alt="more button" />
        </div>
        <a href={props.albumLink} target="_blank" rel="noopener noreferrer">
          <img className="albumArt" src={props.img} alt={props.albumName} />
          <h2 className="albumName">{props.albumName}</h2>
        </a>
      </div>
      {props.artists.map((artist) => {
        return (
          <a className="artist-link" href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            <span className="artistName">{artist.name}</span>
          </a>
        )
      })}
    </article>

  )
};

export default Album;
