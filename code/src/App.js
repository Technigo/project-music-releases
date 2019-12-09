import React from "react";
import data from "./data.json";
import playlistdata from './stretch-goal.json'
import { Album } from "components/Album";
import { Sidebar } from "components/Sidebar";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import './app.css';

console.log(data.albums.items);
console.log(playlistdata.playlists.items);

export const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <section className="sidebar">
          <h1>Popular playlists</h1>
          <div className="playlist-content">
            {playlistdata.playlists.items.map((playlist) => (
              <Sidebar
                key={playlist.id} playlist={playlist}
              />
            ))}
          </div>
        </section>
        <section className="albumSection">
          {data.albums.items.map((item) => (
            <Album
              key={item.id} item={item}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>

  )
}
