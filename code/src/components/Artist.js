import React from 'react';

const Artist = (props) => {
  return (
    <div className="artist">
      {props.artistName.map((artist, index) => {
        return (
          <a key={artist.id} className="artist-name" target="_blank" href={artist.external_urls.spotify} alt="Artistname" rel="noreferrer">{artist.name}    {props.artistName.length - 1 > index ? ', ' : ''}</a>

        )
      })}
    </div>
  )
}
export default Artist;
