import React from 'react'
import data from './data.json'
import Album from './Album'
import Artist from './Artist'

//TO-DO:
//1. [_] get images to work - album cover image
//2. [_] get urls to work - album & artist
//2.5 [_] get artist names to become URLs to each artists own page
//3. [_] make Artist its own compenent which is called
//4. [_] responsive - albums per row: 1 (mobile), 2 (tablet), 4 (desktop)
//5. [_] hover effects

console.log("album.artists.name:")
console.log(data.albums.items[0])

export const App = () => {
  return (
    <div>
      Find me in src/app.js!
      {data.albums.items.map((album) => {
        return <Album albumName={album.name} artists={album.artists} image={album.images[1].url} albumUrl={album.external_urls.spotify} artistUrl={album.artists[0].external_urls.spotify} key={album.id}/>
      })
      }
      {/* {data.albums.items.artists.map((artist) => {
        return <Artist artistName={artist.name} key={artist.id}/>
      })
      } */}
    </div>
    //.maps happen here we think
  )
}


