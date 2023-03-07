/* import AlbumName from 'components/AlbumName'; */
import React from 'react';
import data from './data.json';
// import { AlbumName } from './components/AlbumName'
import Header from './components/Header'

console.log(data);

export const App = () => {
  return (
    <div>
      <Header />
      Find me in src/app.js!
      Sammy Test
      {data.albums.items.map((singleAlbumItem) => {
        return (<p>{singleAlbumItem.name}</p>)
      })}
    </div>
  );
}
