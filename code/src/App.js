import React from 'react';
import { Header } from 'components/Header';
import { Albums } from 'components/Albums';
import { Playlists } from 'components/Playlists';
import Dropup from 'components/Dropup';

export const App = () => {
  return (
    <div>
      <Header headerNameInput="New Albums" />
      <Albums albumTypeInput="album" />
      <Header headerNameInput="Singles" />
      <Albums albumTypeInput="single" />
      <Dropup />
      <Playlists />
    </div>
  );
}
