import React from 'react'
import data from './data.json'

import Header from 'components/Header'

import Album from './components/Album'
console.log(data)



export const App = () => {
  return (
    <><header className="header">
      <Header />
    </header>

    <section className="album-container">
      {data.albums.items.map(items => {
        return <Album
        album={items.name}
        albumurl={items.external_urls.spotify}
        img={items.images[0].url}
        artist={items.artists}
        key={items.id}
        />
      })}
    </section>
      </>
  )
}


