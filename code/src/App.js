import React from 'react'
import data from './data.json';
import Artwork from './components/Artwork'
import AlbumName from './components/AlbumName'
import AlbumArtist from 'components/AlbumArtist';
import Header from 'components/Header'

import './index.css';


// console.log(data);

export const App = () => {
  return (
    <div className='body-container'>
    <Header/>
    <div className = 'music-container'>
      {data.albums.items.map (item => {
        return <>
        <div className = 'Albums'>
          <Artwork key={item.id} item={item} img={item.images}/>
          <AlbumName key={item.name} AlbumName={item.name} AlbumUrl={item.external_urls.spotify}/>
          <AlbumArtist key={item.artists.name} AlbumArtist={item}/>
        </div>
        </>
      })}    
    </div>
    </div>
  );
}
