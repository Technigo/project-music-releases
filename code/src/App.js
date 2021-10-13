import React from "react"
import data from "./data.json"
// import playlistdata from "./stretch-goal.json"

import { Album } from "./components/Album"
// import { Playlist } from "./components/Playlist"

import "./app.css"

export const App = () => {
  return (
      <section className="app">
        <section className="app-data">
          {data.albums.items.map(item => {
            return (
              <Album key={item.id} item={item} />
            )
          })}
        </section>
      </section>
  )
}