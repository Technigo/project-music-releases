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
          <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">           
            <h2 className="artistName">{artist.name}</h2>
          </a>
        )
      })}
    </article>

  )
};

export default Album;
