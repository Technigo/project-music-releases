import React from "react"
import { Album } from "components/Album"
import data from "./data.json"
import "./app.css"

console.log(data)

export const App = () => {
  return (
    <div>
      <h1>New albums and singles</h1>
      <div className='flex-container'>
        {data.albums.items.map(album => (
          <Album key={album.id} album={album} />
        ))}
      </div>
    </div>
  )
}
