import React from 'react';
import data from './data.json';
import Card from './Card';
import { Aside } from './Aside';
import stretchGoals from './stretch-goal.json'
import './app.css';

const playlistArray = stretchGoals.playlists.items
const dataArray = data.albums.items;
const singleArray = dataArray.filter(single => single.album_type === 'single');
/* console.log(singleArray); */
const albumArray = dataArray.filter(album => album.album_type === 'album');
/* console.log(albumArray); */
export const App = () => {
  return (
    <>
      <h1 className="app__header">New albums {'&'} singles</h1>
      <main className="app__grid">
        <aside classNAme="app__aside">
          <h2 className="heading-two">Editor's Pick</h2>
          {playlistArray.map(playlist => {
            return(
            <Aside 
            key={playlist.id}
            image={playlist.images[0].url}
            playlistURL={playlist.external_urls.spotify}
            name={playlist.name}
            />
            )
          })}
          
        </aside>
        <section className="app__singles-grid">
          <h2 className="heading-two">Singles</h2>
          {singleArray.map(album => {
            return <Card key={album.name} album={album} />;
          })}
        </section>
        <section className="app__album-grid">
          <h2 className="heading-two">Albums</h2>
          {albumArray.map(album => {
            return <Card key={album.name} album={album} />;
          })}
        </section>
      </main>
    </>
  );
};
