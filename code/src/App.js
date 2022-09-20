import React from 'react';
import data from './data.json';
import AlbumName from './components/AlbumName';

console.log(data);
export const App = () => {
  return (
    <>
       {data.albums.items.map (item => {
          return <AlbumName key={item.id} data = {item}/>
       })} 
      </>
  );
}


