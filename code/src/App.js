import React from 'react'

//import Artist from './components/Artist';
import Album from './components/Album';
import Header from './components/Header';

import data from './data.json'

console.log(data);

const albumArray = data.albums.items; 

export const App = () => {
  return (
    <>
      <Header />
      <div className="whole-container">
         {albumArray.map((album) => {
            return (
            <Album key={album.name} name={album.name} artist={album.artists[0].name} picture={album.images[0].url} externalurls={album.artists[0].external_urls.spotify} albumurl={album.external_urls.spotify} />
          )
          })}
      </div>
    </>
  )
}



