import React from "react"
import data from './data.json'

export const Album = () => {
  return (
    <div>
      {data.albums.items.map((album) => {
        return <div key={album.id}> <Album name={album.name} /> </div>
      })}
    </div>
  )
}