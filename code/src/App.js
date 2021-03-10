import React from 'react'
import data from './data.json'
import Album from './Components/Album.js'


console.log(data)

const AlbumArray = data.albums.items;

export const App = () => {
  return (
    <>
      {AlbumArray.map((album) => {
        console.log(album.name)
        return ( 
        <div className="album"> 
          <Album
            imgsrc={album.images[0].url}
            key={album.id}
            name={album.name}
            artist={album.artists[0].name}
            url={album.external_urls.spotify}
            urlArtist={album.artists[0].external_urls.spotify}
          />
        </div>
        )
      })}
    </>
  )
}
