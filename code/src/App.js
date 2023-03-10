import React from 'react';
import data from './data.json';
import sidebarData from './stretch-goal.json';
import Album from './components/Album';
import SingleAlbum from './components/SingleAlbum';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

console.log(data);

export const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="album-container">
        <Album data={data} />
        <SingleAlbum data={data} />
      </div>
      <Sidebar sidebarData={sidebarData} />
    </div>
  );
};
