import React from 'react';
import { Header } from 'components/Header';
import { Albums } from 'components/Albums';
import { Playlists } from 'components/Playlists';

export const App = () => {
  return (
    <div>
      <Header />
      <Albums />
      <Playlists />
    </div>
  );
}
