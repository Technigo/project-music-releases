import React from 'react'

import data from './data.json'
import Albumcover from './components/Albumcover.js'
import Albuminfo from './components/Albuminfo.js'
import ArtistInfoList from './components/ArtistInfoList.js'
import Header from './components/Header.js'

export const App = () => {
  const itemArray = data.albums.items
  
  return (
    <section>
      <Header />
      <article className="grid-container">
      {itemArray.map(item => {
        let artistNames = item.artists;
        return (
          <div className="grid-container-div">
            <Albumcover 
              key={item.id}
              src={item.images[1].url} 
              url={item.external_urls.spotify}
            />
            <Albuminfo    
              key={item.id + '1'}        
              album={item.name}
              url={item.external_urls.spotify}
            />
            <ArtistInfoList
              artists={artistNames}
            />
          </div>
        )
      })}
      </article>
  </section>
  )
}


