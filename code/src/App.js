import React from 'react'

import data from './data.json'
import Albumcover from './components/Albumcover.js'
import Albuminfo from './components/Albuminfo.js'
import Header from './components/Header.js'

console.log(data)

export const App = () => {
  const itemArray = data.albums.items
  
  return (
    <section>
      <Header />
      <article className="grid-container">
      {itemArray.map(item => {
        if (item.artists.length >= 2) {
          
          let result = '';
          for (let i = 0; i < item.artists.length; i++) {
            if (i === item.artists.length - 1) {
              result += item.artists[i].name;          
            } else if (i === item.artists.length - 2 && i !== 0) {
              result += item.artists[i].name + ' & ';
            } else {
              result += item.artists[i].name + ', ';          
            }            
          }
          return (
            <div className="grid-container-div">
              <Albumcover 
                key={item.id}
                src={item.images[1].url} 
                url={item.external_urls.spotify}
              />
              <Albuminfo 
                key={item.artists[0].id}
                album={item.name}
                artist={result}
                url={item.external_urls.spotify}
                artistUrl={item.artists[0].external_urls.spotify}
              />
            </div>            
          )
        }  
        
        return (
          <div className="grid-container-div">
          <Albumcover 
            key={item.id}
            src={item.images[1].url} 
            url={item.external_urls.spotify}
          />
          <Albuminfo 
            key={item.artists[0].id}
            album={item.name}
            artist={item.artists[0].name}
            url={item.external_urls.spotify}
            artistUrl={item.artists[0].external_urls.spotify}
          />
          </div>
        )
      })}
      </article>
  </section>
  )
}


