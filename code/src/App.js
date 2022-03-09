import React from 'react'
import data from './data.json'

import { Header } from './components/Header'
import { Album } from './components/Album'
// import { Artist } from './components/Artist' 

console.log('data:', data)
console.log('album-cover', data.albums.items[0].images[1].url)
console.log('album-name', data.albums.items[0].name)
console.log('album-link', data.albums.items[0].external_urls.spotify)
console.log('artist-name', data.albums.items[0].artists[0].name)
console.log('artist-items', data.albums.items)



export const App = () => {
   return (
    <section>
      <Header />

      {data.albums.items.map((albumData) => {
        return (
          <Album 
            key={albumData.id}
            data={albumData}
          />
        )
      })
    }
    </section>
    )
  }
