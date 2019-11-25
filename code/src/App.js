import React from 'react'
import data from './data.json'
import { Header } from 'components/Header.js'
import { Cards } from './Cards'
import { Footer } from 'components/Footer.js'
import 'App.css'

console.log(data.albums.items)
console.log(data)

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="album-section">
        {data.albums.items.map((item) => (
          <Cards
            image={item.images[1].url}
            key={item.id}
            artistUrl={item.artists[0].external_urls.spotify}
            item={item}
            albumUrl={item.external_urls.spotify}
            albumName={item.name} />
        ))

        }
        <Footer />
      </div>
    </div>
  )

}
