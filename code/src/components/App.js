import React from 'react'
import data from '../data.json'
import AlbumWrapper from './AlbumWrapper'

//TO-DO:
//1. [X] get images to work - album cover image
//2. [X] get urls to work - album & artist
//2.5 [X] get artist names to become URLs to each artists own page
//2.7 [X] get each artist name to link to their respective url, not just the first
//3. [X] make Artist its own compenent which is called
//4. [X] responsive - albums per row: 1 (mobile), 2 (tablet), 4 (desktop)
//5. [X] hover effects
//10. [X] fix correct fonts
//6. [_] readMe
//7. [_] crossbrowser test
//8. [_] netlify deploy
//9. [X] restructure: AlbumWrapper which calls on components AlbumArt and Artist
//11. [X] change names, Album.js, AlbumArt.js etc...

export const App = () => {
  return (
    <div className="app">
      {data.albums.items.map((album) => {
        return <AlbumWrapper 
          albumName={album.name} 
          artists={album.artists} 
          image={album.images[0].url} 
          albumUrl={album.external_urls.spotify} 
          key={album.id}
        />
      })
      }
    </div>
  )
}


