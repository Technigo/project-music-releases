import React from 'react'

import data from './data.json'
import Album from './Components/Album.js'
import Header from './Components/Header.js'


const AlbumArray = data.albums.items;

export const App = () => {
  return (
    <>
      <div className="main-container">
      <Header />
        {AlbumArray.map((album) => {
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

