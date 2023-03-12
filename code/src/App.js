import React from 'react';
import './index.css';
import { Header } from './components/Header';
import { AlbumTypeMaster } from './components/AlbumTypeMaster';

export const App = () => {
  return (
    <main>
      <Header headerName="New Albums" />
      <AlbumTypeMaster albumTypeCategory="album" />
      <Header headerName="New Singles" />
      <AlbumTypeMaster albumTypeCategory="single" />
      <Header headerName="New Compilations" />
      <AlbumTypeMaster albumTypeCategory="compilation" />
    </main>
  );
};

