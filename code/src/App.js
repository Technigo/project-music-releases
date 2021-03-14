import React from 'react'
import data from './data.json'
import { Album } from './Album'
import { Heading } from './Heading'
import { Singles } from './Singles'

console.log(data)

export const App = () => {
  return (
    <div className="body-container">
      <Heading title="New singles"
      className="singles"
      />
      <div className="album-container">
        {data.albums.items.map((album) => {
          return (

            <Singles 
            key={album.id} 
            imageSrc={album.images[1].url} 
            link={album.external_urls.spotify} 
            albumName={album.name}
            artists={album.artists}
            albumType={album.album_type}
            />
          )
        })}

      </div>
      <Heading title="New albums" 
      className="albums"
      />
      <div className="album-container">
        {data.albums.items.map((album) => {
          return (

            <Album 
            key={album.id} 
            imageSrc={album.images[1].url}
            link={album.external_urls.spotify} 
            albumName={album.name}
            artists={album.artists}
            albumType={album.album_type}
            />
          )
        })}
      </div>
    </div>
  )
}
