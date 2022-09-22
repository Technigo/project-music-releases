import React from 'react';
import data from './data.json';
import Album from './components/Album';
import Artist from './components/Artist';

console.log(data);

export const App = () => {
  return (
    <>
      {data.albums.items.map((album) => (
        <div>

          <Album
            key={album.id}
            name={album.name}
            img={album.images[1].url} />

          {album.artists.map((artist) => (
            <Artist
              key={artist.id}
              name={artist.name} />
          ))}

        </div>

      ))};
    </>

  );
};