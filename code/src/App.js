import React from 'react';
import data from './data.json';
import { AlbumCover } from 'components/AlbumCover';
import { ArtistName } from './components/Artistname'
import { SongTitle } from './components/SongTitle'  //showing in html
import index from './index.css'


console.log(data);

/* Possible options: <PhotoAlbum layout="rows" photos={image} />*/


export const App = () => {
  return (
    <>
    {data.albums.items.map(item => {
      return <ArtistName key = {data.id} data = {item} text = "Test"/> //declaring a property called data ,item is the value
      })}
      <AlbumCover/>
    </>
     
   
  );
}
