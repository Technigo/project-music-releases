import React from 'react';
import data from '../stretch-goal.json'

export const Playlists = () => {
  console.log(data)
  return (
    <div className="playlists-container">
      <h1>Feautred Playlists</h1>
      {
        data.playlists.items.map((playlistsData) => {
          return (
            <a href={playlistsData.external_urls.spotify}>
              <p>{playlistsData.name}</p>
            </a>
          )
        })
      }
    </div>
  );
};