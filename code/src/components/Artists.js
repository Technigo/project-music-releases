import React from 'react';
import data from '../data.json';

export const Artists = () => {
    return (
      <div>
        <h2 style={{color:'green'}}>HELLO ARTISTS!!</h2>
        {data.albums.items.map((singleArtistItem) => {
          return (<h1>{singleArtistItem.name}</h1>)
        })}
      </div>
    );
  };

/* export const Artists = () => {
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
*/