import React from "react"
import data from "./data.json"

import { Album } from "./components/Album"

import "./app.css"

  // Renders the whole she-bang by importing the Album component,
  // which in turn imports a few other components.
  // We also make sure to provide a key.
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