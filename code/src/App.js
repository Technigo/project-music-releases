import React from 'react'
import data from './data.json'
import { Album } from './Components/Album.js'
import { Artist } from './Components/Artist.js'


console.log(data)

const releases = data.albums.items;

export const App = () => {
  return (
    <section className="releases">
      <header className="release-header">
        <h1 className="release-title">New albums &amp; singles</h1>
      </header>
      <section className="release-container">
        {releases.map((album) => {
          return (
            <Album
              key={album.id}
              name={album.name}
              url={album.external_urls.spotify}
              image={album.images[1].url}>
              {album.artists.map((artist) => {
                return (
                  <Artist
                    key={artist.id}
                    name={artist.name}
                    url={artist.external_urls.spotify} />
                )
              })}
            </Album>
          )
        })}
      </section>
    </section>
  )
}