import React from "react"
import { AlbumInfo } from "components/AlbumInfo"
import { AlbumCover } from "components/AlbumCover"
import data from "./data.json"

console.log(data)

export const App = () => {
  return (
    <div class='flex-container'>
      {data.albums.items.map(album => (
        <div key={album.id}>
          <AlbumCover image={album.images[1].url} />

          <AlbumInfo name={album.name} />
        </div>
      ))}
    </div>
  )
}
