import React from 'react'
import data from './data.json'
import Album from './Components/Album.js'
import Header from './Components/Header.js'


console.log(data)

const AlbumArray = data.albums.items;

export const App = () => {
  return (
    <>
    <Header />
    <div className="main-container">
      {AlbumArray.map((album) => {
        console.log(album.name)
        return ( 
        <div key={album.id} className="album"> 
          <Album
            imgsrc={album.images[0].url}
            name={album.name}
            url={album.external_urls.spotify}
            artist={album.artists}
            href={album.external_urls.spotify}
          />          
        </div>
        )}
      )}
    </div>
    </>
  )}

