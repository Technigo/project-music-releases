import React from 'react'
import data from './data.json'
import Header from './Components/Header'
import Album from './Components/Album'
import Artist from './Components/Artist'
import Image from 'Components/Image'

console.log(data);

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
              <Image
              imgsrc={album.images[1].url}/>
              <Album 
                key={album.name}
                title={album.name}
                href={album.external_urls.spotify}
              />
              <Artist
              album= {album.artists}
              />
            </>
          ) 
        })}
      </main>
    </>
  )
}