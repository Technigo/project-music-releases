import React from 'react'
import data from './data.json'
import Header from './Header'
import Album from './Album'

console.log(data)

export const App = () => {
  return (
    <>
      <Header />
      <section className="album-section">
        {data.albums.items.map(album => { 
          return <Album 
            key={album.id} 
            name={album.name} 
            artists={album.artists} 
            images={album.images[0].url} 
            link={album.external_urls.spotify} 
            />
        })}
      </section>
    </>
  )
}
