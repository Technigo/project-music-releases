/* import AlbumName from 'components/AlbumName'; */
import React from 'react';
import data from './data.json';
// import { AlbumName } from './components/AlbumName'

console.log(data);

export const App = () => {
  return (
    <div>
      Find me in src/app.js!
      Sammy Test
      {data.albums.items.map((singleAlbumItem) => {
        return (<p>{singleAlbumItem.name}</p>)
      })}
    </div>
  );
}
