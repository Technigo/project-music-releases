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

/* import { Album } from './Album';
import data from '../../data.json'; // assuming you have imported the data object correctly

export const Artist = () => {
  return (
    <div>
      {data.albums.items.map((singleAlbumItem) => {
        return (
          <div>
            {singleAlbumItem.artists.map((artist) => (
              <p>{artist.name}</p>
            ))}
            <Album key={singleAlbumItem.id} album={singleAlbumItem} />
          </div>
        );
      })}
    </div>
  );
};

export const Artist = () => {
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
} */