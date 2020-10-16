import React from 'react';
import data from './data.json';
import {Header} from './Header';
import {Albumslist} from './Albumslist';

export const App = () => {
  return (
    <>
      <Header />
      <Albumslist />
    </>
  );
};