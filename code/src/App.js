import React from 'react'
import data from './data.json'
import { Header } from './Header.js'
import { Albums } from './Album.js'
import { Artists } from './Artist.js'
import { ReleaseTitle } from './ReleaseTitle.js'

console.log(data)

export const App = () => {
  return (
    <div className='sectionContainer'>
      <Header />
      <section className='rows'>
        {data.albums.items.map((album) => {
          return (

            <div className='albumContainer'>
              <Albums 
                key={album.id} 
                url={album.images[0].url} 
                name={album.name} />
              <ReleaseTitle 
                key={album.name} 
                albumName={album.name} 
                albumURL={album.external_urls.spotify} />
              <div className='artistContainer'>
                {album.artists.map((sub, subindex) =>
                  <Artists key={subindex} artist={sub.name} artistURL={sub.external_urls.spotify} />
                )}
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}