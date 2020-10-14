import React from 'react'
import data from './data.json'
import { Header } from './Header.js'
import { Albums } from './Album.js'
import { Artists } from './Artist.js'
import { ReleaseTitle } from './ReleaseTitle.js'
import 'App.css'

console.log(data)

export const App = () => {
  return (
    <div className='sectionContainer'>
      <Header />
      <section className='cardContainer'>
        {data.albums.items.map((album) => {
          return (

            <div className='albumCard'>
              <Albums
                key={album.id}
                url={album.images[0].url}
                name={album.name}
              />
              <div className='textContainer'>
                <ReleaseTitle
                  key={album.name}
                  albumName={album.name}
                  albumURL={album.external_urls.spotify}
                />
                {album.artists.map((musician) =>
                  <Artists
                    key={musician.id}
                    artist={musician.name}
                    artistURL={musician.external_urls.spotify}
                  />
                )}
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}