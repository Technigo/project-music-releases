import React from 'react';

export const AlbumCard = (props) => {
// console.log(props)
  return (
    <div className="AlbumCard">
      <img src={props.image} alt={props.artistName}/>
      <p className="artist-text">{props.artistName}</p>
      <p className="album-text">{props.albumName}</p>
    </div>
  )
}