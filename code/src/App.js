import React from 'react'

import data from './data.json'
import Albumcover from './components/Albumcover.js'
import Albuminfo from './components/Albuminfo.js'
import Header from './components/Header.js'


console.log(data)
// //artist name
// console.log(data.albums.items[0].artists[0].name)

// //album cover
// console.log(data.albums.items[0].images[0].url)

// //album name
// console.log(data.albums.items[0].name)

// console.log(data.albums.items.map(item => item.name));


export const App = () => {
  const itemArray = data.albums.items
  return (
    <section>
      <Header />
      <article className="grid-container">
      {itemArray.map(item => {
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
          //artistens namn
          //albumets namn
          />
        </div>
      )
    })}
      </article>
  </section>
  )
}


