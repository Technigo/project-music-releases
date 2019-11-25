import React from 'react'
import data from './data.json'
import {Album} from './Album'

export const App = () => { 
  return (
    <div className="backgroundContainer">
      <div className="albumContainer">
        <div className="header">
          <h1>New albums & singles</h1>
        </div>
      <div className="albumsAndArtists">
        {data.albums.items.map(item => {   
          return <Album
          key={item.id}
          image={item.images[1].url}
          name={item.name}
          url={item.external_urls.spotify}
          artists={item.artists}
          />
        })};
      </div>
    </div>
  </div>  
  )
}
