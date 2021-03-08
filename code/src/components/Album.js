import React from 'react'
import data from '../data.json'
import Artist from './Artist'

console.log(data)

const Album = data.albums.items.map((album) => {
  return (
    <div className="album-card">
      <img className="album-image" src={album.images[0].url} alt={album.name} />
      <p className="album-name">{album.name}</p>
      <Artist />
    </div>
  )
  })

export default Album
