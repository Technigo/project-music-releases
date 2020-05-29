import React from 'react'
import data from './data.json'
import { Header } from './components/Header'
import { Album } from './components/Album'
import './components/app.css'

console.log(data)

export const App = () => {
  return (
    <div>
      <Header />
      <hr className="separator"></hr>

      <div className="List">
        {data.albums.items.map((album) => {
          return (< Album key={album.artists[0].name}
            image={album.images[1].url}
            artistName={album.artists}
            title={album.name}
            albumLink={album.external_urls.spotify}
            artistLink={album.artists[0].external_urls.spotify} />
          )
        })
        }
      </div>
    })</div>
  )
}
