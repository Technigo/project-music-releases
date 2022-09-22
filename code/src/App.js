import React from 'react';
import data from './data.json';
import AlbumCard from './components/AlbumCard';
import Header from './components/Header';
import ArtistName from './components/ArtistName';

console.log(data);

console.log(data);

export const App = () => {
  return (
    <>
      <header><Header /></header>
      {data.albums.items.map((album) => (
        <div className="AlbumCard">

          <AlbumCard
            key={album.id}
            name={album.name}
            img={album.images[1].url}
            url={album.external_urls.spotify} />
          {album.artists.map((artist) => (
            <ArtistName
              key={artist.id}
              name={artist.name}
              url={artist.external_urls.spotify} />
          ))}
        </div>

      ))};
    </>

  );
};

// @TODO add Header? "New albums & singles"