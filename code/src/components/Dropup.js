/* eslint-disable */
import React from 'react';
import data from '../stretch-goal.json'

const { useState } = React;

const Dropup = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropup">
      <div
        className={isActive ? "close" : "open"}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="playlists-header-container">
          <img
            className="playlist-icon"
            src="icons/playlist.png"
            alt="playlist icon consisting of 3 lines and a play button"
          />
          <h1 className="playlists-title">Featured Playlists</h1>
        </div>
      </div>
      {isActive && (
        <div className="dropup-content" onClick={() => setIsActive(false)}>
          {data.playlists.items.map((playlistsData) => {
            return (
              <a
                href={playlistsData.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
              >
                <p>{playlistsData.name}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropup;
