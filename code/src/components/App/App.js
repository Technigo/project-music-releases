import React from 'react';
import data from 'data.json';
import dataPlaylists from 'stretch-goal.json';
import './App.css';
import List from 'components/List/List';
import Sidebar from 'components/Sidebar/Sidebar';
import toggleSidebar from 'actions/toggleSidebar';

const App = () => {
  const albums = data.albums.items.filter((album) => {
    return album.album_type === 'album';
  });
  const singles = data.albums.items.filter((album) => {
    return album.album_type === 'single';
  });
  return (
    <>
      <div className="main-wrapper">
        <Sidebar playlists={dataPlaylists.playlists.items} />
        <main>
          <List type="Albums" items={albums} />
          <List type="Singles" items={singles} />
        </main>
      </div>
      <div id="overlay" className="overlay" onClick={toggleSidebar} aria-hidden="true" />
    </>
  );
};
export default App;
