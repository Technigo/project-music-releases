import React from 'react';
import data from './data.json';

export const Artists = () => {
    return (
      <div>
        {data.albums.items.map((album) => (
          <div key={album.id}>
            <h3>{album.name}</h3>
            {album.artists.map((singleArtistItem) => (
              <p key={singleArtistItem.id}>{singleArtistItem.name}</p>
            ))}
          </div>
        ))}
      </div>
    );
  }
