import React from "react";
import playlist from "./playlist.json";
import data from "./data.json";
import { Album } from "./components/Album";
import { Artists } from "./components/Artists";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  const mapMusic = (type) => {
    return data.albums.items
      .filter((item) => item.album_type === type)
      .map((item) => {
        return (
          <Album
            key={item.name}
            image={item.images[0].url}
            albumName={item.name}
            albumLink={item.external_urls.spotify}
            tracks={item.total_tracks}
            release={item.release_date}
            artist={item.artists.map((artist) => (
              <Artists
                key={artist.name}
                name={artist.name}
                url={artist.external_urls.spotify}
              />
            ))}
          />
        );
      });
  };

  return (
    <>
      <h1 className="header">New albums &amp; singles</h1>
      <div className="main">
        <div className="sidebar">
          <h3 className="playlist">Playlists</h3>
          {playlist.playlists.items.map((list) => (
            <Sidebar
              key={list.id}
              list={list.name}
              link={list.external_urls.spotify}
              tracks={list.tracks.total}
            />
          ))}
        </div>
        <div class="container">
          <h4>Singles</h4>
          <div className="singles-container">{mapMusic("single")}</div>
          <h4>Albums</h4>
          <div className="albums-container">{mapMusic("album")}</div>
        </div>
      </div>
    </>
  );
};
