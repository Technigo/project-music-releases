import React from 'react';
import data from './data.json';

import Header from './Header';
import ReleasesList from './ReleasesList';

const releaseData = data.albums.items;

export const App = () => {
  return (
    <>
      <Header />
      <ReleasesList data={releaseData} />
    </>
  );
};