import React from 'react'
import data from './data.json'
import { Header } from './Header.js'
import { Album } from './Album.js'
import { Artists } from './Artist.js'
import { ReleaseTitle } from './ReleaseTitle.js'
import './app.css'

export const App = () => {
  return (
    <div className='section-container'>
      <Header />
      <section className='card-container'>
        {data.albums.items.map((album) => {
          return (
            <div className='album-card' key={album.id} >
              <Album
                url={album.images[0].url}
                name={album.name}
              />
              <div className='text-container'>
                <ReleaseTitle
                  albumName={album.name}
                  albumURL={album.external_urls.spotify}
                />
                <div className="artist-container">
                  {album.artists.map((musician) =>
                    <Artists
                      key={musician.id}
                      artist={musician.name}
                      artistArray={album.artists}
                      artistURL={musician.external_urls.spotify}
                    />
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}