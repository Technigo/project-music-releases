import React from 'react';
import data from './data.json';
import json from './stretch-goal.json';
import { Header } from './Components/Header.js';
import { Album } from './Components/Album.js';
import { Playlists } from './Components/Playlists.js';
import { Playlistheader } from './Components/Playlistheader.js';
import { HeaderSingles } from './Components/HeaderSingles.js';
import { Singles } from './Components/Singles.js';

const dataArray = data.albums.items;
const albumArray = dataArray.filter(album => album.album_type === 'album');
const singleArray = dataArray.filter(single => single.album_type === 'single');
const playlistArray = json.playlists.items;

export const App = () => {
  return (
    <div className="content">
      <div> 
        <Playlistheader />
        <section className="left-section">
        {playlistArray.map(playlist => (
            <Playlists
              key={playlist.id}
              image={playlist.images[0].url}
              playlistURL={playlist.external_urls.spotify}
            />
          ))}
        </section>
      </div>
      <div>
      <HeaderSingles />
      <section className="section-wrapper">
          {singleArray.map(single => (
            <Singles
              key= {single.artists[0].id}
              albumName={single.name}
              artistName={single.artists[0].name}
              image={single.images[0].url}
              albumURL={single.external_urls.spotify}
              artists={single.artists}
            />
          ))}
        </section>
        <Header />
        <section className="section-wrapper">
          {albumArray.map(album => (
            <Album
              key={album.artists[0].id}
              albumName={album.name}
              artistName={album.artists[0].name}
              image={album.images[0].url}
              albumURL={album.external_urls.spotify}
              artists={album.artists}
            />
          ))}
        </section>
      </div>
    </div>
  );
};
