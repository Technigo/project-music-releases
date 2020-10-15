import React from 'react';

import Artist from 'Artist';

const Artists = (props) => {
  return (
    <div className={`artists ${props.artists.length > 1 ? 'artist-list' : ''}`}>
      {props.artists.map(artist => {
        return (
          <Artist
            key={artist.id}
            artist={artist.name}
            artistUrl={artist.external_urls.spotify}
          />
        )
      })}
    </div>
  )
};

export default Artists;
