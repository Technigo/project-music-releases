import React from 'react';
import { Header } from 'components/Header';
import { Album } from 'components/Album';
import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <div>
     <Header greeting="Hey there" />
    {data.albums.items.map((singleAlbumItem) => {
      return (<p>{singleAlbumItem.name}</p>)
    })}    
    </div>
  );
}
