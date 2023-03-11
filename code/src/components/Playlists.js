import React from 'react';
import data from '../stretch-goal.json'

export const Playlists = () => {
  return (
    <div className="playlists-container">
      <div className="playlists-header-container">
        <img className="playlist-icon" src="icons/playlist.png" alt="playlist icon consisting of 3 lines and a play button" />
        <h1 className="playlists-title">Featured Playlists</h1>
      </div>
      {
        data.playlists.items.map((playlistsData) => {
          return (
            <a key={playlistsData.id} href={playlistsData.external_urls.spotify} target="_blank" rel="noreferrer">
              <p>{playlistsData.name}</p>
            </a>
          )
        })
      }
    </div>
  );
};