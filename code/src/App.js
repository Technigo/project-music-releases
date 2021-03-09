import React from 'react'
import data from './data.json'
import Header from './components/Header'
import Album from './components/Album'

export const App = () => {
  const AlbumItems = data.albums.items
  console.log(AlbumItems)
  return (
    <>
      <Header />
      <div className="album-wrapper">
        {AlbumItems.map(album => {
          return <Album image={album.images[0].url} name={album.name} artist={album.artists} url={album.external_urls.spotify} />
        })}
      </div>
    </>
  )
}
