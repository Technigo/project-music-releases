import React from 'react'
import data from './data.json'

import { Header } from './Header'
import { AlbumContainer } from './AlbumContainer'

export const App = () => {
  return (
    <> 
      < Header />
      <article className="main">
        {data.albums.items.map(album => {
          return (
            <AlbumContainer 
              key={album.id} 
              name={album.name} 
              linkAlbum={album.external_urls.spotify} 
              image={album.images[0].url}
              artists={album.artists}
            />
          )
          })
        }
        </article>
    </>
  );
}