import React from 'react'
import data from './data.json'
import { Cover } from "./album-cover"
import { AlbumName } from "./album-name"
import { Artist } from "./artist-name"
import { Icons } from "./icons"
console.log(data)

export const App = () => {
  return (
    data.albums.items.map((item) => {

      return <div className="album-card">
        <div className="test-flex">
          <Cover item={item} />
          <Icons />
        </div>
        <AlbumName item={item} />
        <div className="artist-name-container">
          <Artist item={item} /> </div>
      </div>
    })
  )
}
