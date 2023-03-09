import React from 'react';

const Album = (props) => {
  return (
    <article className="card">
      <div className="linked-album">
        <a href={props.albumLink} target="_blank" rel="noopener noreferrer">
          <img className="albumArt" src={props.img} alt={props.albumName} />
          <h2 className="albumName">{props.albumName}</h2>
        </a>
      </div>
      {props.artists.map((artist) => {
        return (
          <a className="artist-link" href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            <h3 className="artistName">{artist.name}</h3>
          </a>
        )
      })}
    </article>

  )
};

export default Album;
