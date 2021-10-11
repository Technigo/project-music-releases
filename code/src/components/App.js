import React from 'react'
import data from '../data.json'
import { Album } from './Album'
import { Header } from './Header'

console.log(data)

const items = data.albums.items

export const App = () => {
  return (
    <div>
      <Header />
      {items.map((data) => {
        return (
          <Album
            key={data.artists[0].id}
            src={data.images[1].url}
            title={data.name}
            artist={data.artists[0].name}
            titleUrl={data.external_urls.spotify}
            artistUrl={data.artists[0].external_urls.spotify}
          />
        )
      })}
    </div>
  )
}


