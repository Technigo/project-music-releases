import React from "react";
import data from "./data.json";
// import playlistdata from "./stretch-goal.json";
import "./app.css";
import { Header } from "./components/Header";
import { Album } from "./components/Album";
// import { Playlist } from "./components/Playlist"

export const App = () => {
  return (
    <div className="app">
      < Header />
      <div className="app-data">
        {data.albums.items.map(item => {
          return (
            <Album key={item.id} item={item} />
          )
        })}
      </div>
    </div>


  );
};
{/* <section className="side-playlist">
        <h1>Popular Spotify playlists</h1>
        <div className="side-content">
          {playlistdata.playlists.items.map(item => {
            return (
              <Playlist key={item.id} item={item} />
            )
          })}
        </div>
      </section> */}
