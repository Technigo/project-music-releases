import React from 'react'
import data from './data.json'
import Album from './Components/Album.js'
import Artist from './Components/Artist.js'


console.log(data)

const AlbumArray = data.albums.items;

export const App = () => {
  return (
    <>
      {AlbumArray.map((album) => {
        console.log(album.name)
        return ( 
        <div key={album.id} className="album"> 
          <Album
            imgsrc={album.images[0].url}
            title={album.name}            
            name={album.artists.map((artist) => (
              <Artist 
              key={artist.name}
              artist={artist.name}
              href={artist.external_urls.spotify}
            />))}
          />
        </div>
        )})}
      </>
      )}
    