import React from 'react'
import data from './data.json'
// importerar article from article.js to app.js
import { Header } from './components/Header'
import { Album } from './components/Album'
// getting albums array from the object and putting in a variable 
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
                //passing array with artist as props to Album.js
                album={album.artists} 
              />
            </>
          ) 
        })}
      </main>
    </>
  )
}


