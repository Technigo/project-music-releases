import React from 'react';

const Album = (props) => {
  return (
    <article className="card">
      <img className="albumArt" src={props.img} alt={props.albumName} />
      <h2 className="albumName">{props.albumName}</h2>

      {props.artists.map((artist) => {
        return (
          <h2 className="artistName">{artist.name}</h2>
        )
      })}
    </article>

  )
};

export default Album;
