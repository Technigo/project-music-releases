import React from 'react'
import data from './data.json'
import Album from './components/Album'
import Header from './components/Header'


console.log(data)
console.log(data.albums.items[0].images[0].url)



export const App = () => {
  return (
    <>
    <header className="header">
      <Header />
    </header>
    <section className="album-container">
      {data.albums.items.map(items => {
        return <Album album={items.name} albumurl={items.external_urls.spotify} img={items.images[0].url} contributors={items.artists[0].name} artisturl={items.artists[0].external_urls.spotify} />
      })}
    </section>
    </>
  )
}

//items.artists[0].external_urls.spotify