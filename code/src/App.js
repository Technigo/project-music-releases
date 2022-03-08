import React from 'react';
import data from './data.json';
import Album from './components/Album';
import Artist from './components/Artist';
import Header from './components/Header';

console.log(data)

export const App = () => {
  return (
    <div>
      <Header />
      <section  className="App">
          {data.albums.items.map(album => {
          return <Album 
              albumName={album.name}
              artistName={album.artists[0].name}
              cover={album.images[1].url}
              albumLink={album.external_urls.spotify}
              key={album.name}
      
         />
        })}
    </section>
    </div>
  )
}


