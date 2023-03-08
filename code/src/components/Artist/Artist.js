import React from 'react';

export const Artist = ({ album }) => {
  console.log(album);
  return (
    <div>
      {album.artists.map((artist, index) => (
        <div key={artist.id}>
          <p>
            {artist.name}
            {album.artists.length - 1 > index ? ', ' : ''}
          </p>
        </div>
      ))}
    </div>
  )
}