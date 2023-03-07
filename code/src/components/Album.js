import React from 'react';
import Artist from './Artist'; 

const Album = (props) => {
  return (
    <article className="card">
      <img className="albumArt" src={props.img} alt={props.albumName} />
      <h2>{props.albumName}</h2>
    </article>
  )
}

export default Album;