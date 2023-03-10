import React from 'react';
import { Header } from 'components/Header';
import { Albums } from 'components/Albums';
import { Playlists } from 'components/Playlists';
import Dropup from 'components/Dropup';

export const App = () => {
  return (
    <div>
      <Header />
      <Dropup />
      <Albums />
      <Playlists />
    </div>
  );
}
