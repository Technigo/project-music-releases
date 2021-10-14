import React from 'react'
import data from './data.json'

// then we the vinyl at import in app.js
import Vinyl from './components/Vinyl'

// I just put this in variable so it's easier
const albumArray = data.albums.items

// then here we have the "entire" website
// run this and you will see all the albums and artists
export const App = () => {
  return (
    <main>
      <h1 className="main-heading">New Albums and Singles</h1>
      <hr className="horizontal-line" />
      <div className="container">
        {albumArray.map((album) => {
          return (
            // prettier-ignore
            <Vinyl
              key={album.artists[0].id}
              cover={album.images[1].url}
              song={album.name}
              titleUrl={album.external_urls.spotify}
              artist={album.artists} />
          )
        })}
      </div>
    </main>
  )
}
