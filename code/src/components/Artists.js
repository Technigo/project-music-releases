import React from 'react';

export const Artists = ({ album }) => {
  return (
    <div>
      {album.artists.map((artist, index) => (
        <div key={artist.id}>
          <p className="artist-name">
            {artist.name}
            {album.artists.length - 1 > index ? ', ' : ''}
          </p>
        </div>
      ))}
    </div>
  )
}