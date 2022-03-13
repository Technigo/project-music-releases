import React from 'react'

import data from './data.json'
import Albumcover from './components/Albumcover.js'
import Albuminfo from './components/Albuminfo.js'
import Artistinfo from './components/Artistinfo.js'
import Header from './components/Header.js'

export const App = () => {
  const itemArray = data.albums.items

  const getArtistsInfo = artists => {
    let newArray = artists.map((artist, index) => {
      const lastIndex = artists.length - 1;
      let artistName = '';

      if(index === lastIndex) {
        artistName = artist.name;
      } else {
        artistName = artist.name + ", ";
      }
      
      return ( 
        <Artistinfo 
          key={artist.id}            
          artist={artistName}            
          artistUrl={artist.external_urls.spotify}
        />
      )
      })
      console.log(newArray)
      return newArray;
  }
  
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
          {getArtistsInfo(artistNames)}
          </div>
        )
      })}
      </article>
  </section>
  )
}


