import React from 'react';
import data from './data.json';
import Header from './Header';
import ReleasesList from './ReleasesList';
import './index.css';

//console.log(data);

const releaseData = data.albums.items;
//console.log(releaseData);

export const App = () => {
  return (
    <>
      <Header />
      <ReleasesList data={releaseData} />
    </>
  );
};
