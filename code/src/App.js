import React from 'react'

import { Album } from './components/Album'
import data from './data.json'

export const App = () => {
  return (
    <div className="main">
      <h1 className="main-title">New albums &#38; singles</h1>
      
      <div className="album-cards-container">
        {data.albums.items.map((item) => {
          return (
            <Album 
            key={item.id}
            images={item.images}
            albumName={item.name}
            albumLink={item.external_urls.spotify}
            artists={item.artists}
            />
          )
        }
        )}
      </div>
    </div>
  )
}