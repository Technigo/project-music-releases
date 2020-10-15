import React from 'react'
import data from './data.json'
import { Header } from './Header.js'
import { Album } from './Album.js'
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
              <Album
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
                <div className="artistContainer">
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