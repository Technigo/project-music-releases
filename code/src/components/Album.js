import React from 'react';
import Artist from './Artist'
import data from '../../src/data'


const Album = (props) => {
  console.log(props);

  return (
    <article className="album">
      <img src={props.url} alt="Album cover" />
      <h2>{props.title}</h2>
      <div className="artist-name-container">
        {props.artist.map((artist) => (
          <Artist key={artist.name} artistName={artist.name} />
        ))}
      </div>
    </article>
  )
}

export default Album