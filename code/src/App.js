import React from 'react';
import data from './data.json';
import Header from './Header';
import ReleasesList from './ReleasesList';

console.log(data);

export const App = () => {
  return (
    <>
      <Header />
      <ReleasesList />
    </>
  );
};
