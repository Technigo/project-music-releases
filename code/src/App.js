import React from 'react'
import { Album } from './Album'
import { Header } from './Header'
import data from './data.json'
console.log(data)



export const App = () => {
  return (
    <div>
      <Header />
      <section id="album-container">
        {data.albums.items.map((item) => {

          return <Album key={item.id} albumTitle={item.name} albumURL={item.external_urls.spotify} image={item.images[1].url} artists={item.artists} />

        })}
      </section>
    </div>
  )
}