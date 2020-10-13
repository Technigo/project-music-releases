import React from 'react'
import data from './data.json'
import { AlbumCard } from './components/AlbumCard'
import { Header } from './components/Header'

const albumArray = data.albums.items;
console.log(data)

export const App = () => {
    return (
      <main>
        <Header />
        <div className="album-grid">
          {albumArray.map(album => (
            <AlbumCard 
            albumName={ album.name }
            artistName={ album.artists[0].name }
            image={ album.images[0].url }
            />
          ))}
        </div>
      </main>
    )
  }
  

