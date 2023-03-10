import React from 'react';
import data from './data.json';
import sidebarData from './stretch-goal.json';
import Album from './components/Album';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

console.log(data);

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Album data={data} />
      <Sidebar sidebarData={sidebarData} />
    </div>
  );
};
