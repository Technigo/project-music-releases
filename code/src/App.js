import React from 'react'
import data from './data.json'
import { Album } from './Album'
import { Header } from './Header'

console.log(data)

export const App = () => {
  return (
    <div>
      <Header />
    <div className="album-container">
      {data.albums.items.map(item => {
        return <Album key={item.id}
          cover={item.images[1].url}
          artistURL={item.artists[0].external_urls.spotify}
          albumURL={item.external_urls.spotify}
          name={item.name} artist={item.artists[0].name} />
        })}
      </div>
      </div>
  )
}