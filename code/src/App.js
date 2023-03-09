import React from 'react';
import data from './data.json';
import { Album } from './components/Album';
import { Header } from './components/Header';
// import { ArtistName } from './components/ArtistName';
// import { SongName } from './components/SongName';

/* console.log(data); */
const albumData = data.albums.items.map((item) => ({
  songName: item.name,
  songUrl: item.external_urls.spotify,
  id: item.id,
  imageUrl: item.images[1].url
}));

export const App = () => {
  return (
    <div>
      <Header />
      {albumData.map((album) => (
        <Album
          albumKey={album.id}
          songName={album.songName}
          imageUrl={album.imageUrl}
          songUrl={album.songUrl} />
      ))}
    </div>);
};

/*
export const App = () => {
  return (
    <>
      <Header />
      <section className="main-container">
        <div className="album-container">
          <AlbumCover imageList={data} />
         <SongName songTitle={data} />
          <ArtistName artistList={data} />
        </div>
      </section>
    </>
  );
} */
