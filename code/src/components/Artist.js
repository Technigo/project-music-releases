import React from 'react';
import '../artist.css'

const Artist = (props) => {
  return (
    <div>
      {props.artists.map((artist, index) => (
        <a
          key={artist.id}
          className="artistContainer"
          href={artist.external_urls.spotify}
          rel="noopener noreferrer"
          target="_blank">
          {artist.name}
          {index < props.artists.length - 1 && <span>{index === props.artists.length - 2 ? ' & ' : ', '}</span>}
        </a>
      ))}
    </div>
  );
}

export default Artist;