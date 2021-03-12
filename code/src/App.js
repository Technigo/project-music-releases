import React from 'react'
import data from './data.json'
import Header from './components/Header'
import Album from './components/Album'

const albums = data.albums.items;
// console.log(albums) 

export const App = () => {
  return (
    <>
      <Header  /> 
        <div className="albums-container">
          
            {albums.map(album => {
              return (
                <Album  
                  key={album.id} 
                  image={album.images[0].url}
                  name={album.name}
                  artists={album.artists[0].name}
                  urlAlbum={album.external_urls.spotify}
                  urlArtist={album.artists[0].external_urls.spotify}
                />
              )
            })}
          
        </div> 
    </>
  )
}

export default App; 
