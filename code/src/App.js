import React from 'react'

import data from './data.json'
import Albumcover from './components/Albumcover.js'
import Albuminfo from './components/Albuminfo.js'


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
    <div className="grid-container">
      {itemArray.map(item => {
        return (
          <div>
          <Albumcover 
          key={item.id}
          src={item.images[1].url}
          />
          <Albuminfo 
          key={item.artists[0].id}
          album={item.name}
          artist={item.artists[0].name}
          //artistens namn
          //albumets namn
          />
        </div>
      )
    })}

      {/* <p>
        {itemArray.map(item => item.name)}
      </p>
      <p>
        {itemArray.map(item => item.artists[0].name)}
      </p>
      <p>
        {itemArray.map(item => item.images[2].url)}
      </p> */}
      Find me in src/app.js!
    </div>
  )
}


