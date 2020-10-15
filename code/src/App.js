import React from 'react'
import data from './data.json'
import { Album } from './Album.js'
import { Header } from 'Header.js'
import './index.css'

export const App = () => {
  return (
    <div>
      <Header />
      <div className="albumContainer">
        {data.albums.items.map(album => {
          return <Album key={album.id} name={album.name} image={album.images[0].url} link={album.external_urls.spotify} artists={album.artists} />
        })}
      </div>
    </div>
  )
}

