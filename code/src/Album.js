import React from 'react'
import data from './data.json'

console.log(data)

export const Album = () => {
  return (
    <div className="App">
      {data.albums.items.map(album => {
        return <div key={album.id}>
          <a href={album.uri}> <img src={album.images[1].url} alt="Album cover"></img></a>
          <a href={album.uri}> {album.name}</a> -
            <a href={album.artists[0].uri}> {album.artists[0].name}</a>
        </div>
      })}
    </div>
  )
}