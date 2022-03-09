import React from 'react'
import data from './data.json'

// IMPORT COMPONENTS
import { Album } from './components/Album'
import { Header} from './components/Header'

console.log(data)

// ALBUMS ARRAY 
const albumsArray = data.albums.items

export const App = () => {
  return (
    <>
    <header>
      <Header />
    </header>
    <main className="albums-container">
      {albumsArray.map((album) => {
        return (
        <>
        <Album 
        key={album.name}
        image={album.images[0].url}
        title={album.name}
        href={album.external_urls.spotify}
        album={album.artists}
        />
        </>
      )
   })}
   </main>
   </>
   )
  }