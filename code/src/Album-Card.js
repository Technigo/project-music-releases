import React from 'react'
import data from './data.json'
import { Cover } from "./album-cover"
import { AlbumName } from "./album-name"
import { Artist } from "./artist-name"
import { Icons } from "./icons"
console.log(data)

export const AlbumCard = () => {
  return (
    data.albums.items.map((item) => {

      return <article key={item.id} className="album-card">
        <div className="album-card-subflex">
          <Cover item={item} />
          <Icons />
        </div>
        <AlbumName item={item} />
        <div className="artist-name-container">
          <Artist item={item} /> </div>
      </article>
    })
  )
}
