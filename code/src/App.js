import React from 'react';
import data from './data.json';
import { ArtistName } from './components/Artistname'
import { SongTitle } from './components/SongTitle'  //showing in html

console.log(data);


export const App = () => {
  return (
    <>
    {data.albums.items.map(item => {
      return <ArtistName key = {data.id} data = {item} text = "Test"/> //declaring a property called data ,item is the value
      })}
      
    </>
    
  );
}
