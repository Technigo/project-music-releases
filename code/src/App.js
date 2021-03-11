import React from 'react'
import data from './data.json'
import Album from "./components/Album"

console.log(data)

const albums = data.albums.items;
console.log(albums)

export const App = () => {
  return (
    <div>
      <h1 className="header-text">
      New albums & singles
      </h1>
      <hr />
      <div className="album-container">
        
      { albums.map((album) => {
        return <Album
        
        image={album.images[1].url}
        name={album.name}
        artists={album.artists[0].name}
        albumURL={album.external_urls.spotify}
        artistURL={album.artists[0].external_urls.spotify}
        />
      }) }
        
      </div>
    </div>
  )
}

