import React from 'react'
import data from './data.json'

import Header from './components/Header'
import Album from './components/Album'


export const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        {data.albums.items.map(item => {
            return <Album 
              key={item.id} 
              title ={item.name} 
              url={item.images[1].url} 
              artist={item.artists}
              albumUrl={item.external_urls.spotify} 
              />
          })}    
      </div>
    </>      
);
};
  
//The App.js is inserting data from data.json into url, albumUrl, title and artist that were imported from Album.js

