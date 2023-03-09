import React from 'react';
import data from '../stretch-goal.json'
// import playlistIcon from './icons/playlist.png';

export const Playlists = () => {
  console.log(data)
  return (
    <div className="playlists-container">
      <h1 className="playlists-title">Featured Playlists</h1>
      {
        data.playlists.items.map((playlistsData) => {
          return (
            <a href={playlistsData.external_urls.spotify} target="_blank" rel="noreferrer">
              <p>{playlistsData.name}</p>
            </a>
          )
        })
      }
    </div>
  );
};