import React from "react"
import data from "./data.json"
import { Album } from "./components/Album"
import { Artists } from "./components/Artist"
import { Header } from "./components/Header"
import { tsPropertySignature } from "@babel/types"

console.log(data)
console.log(Album)

export const App = () => {
  return (
    <div className='card'>
      <Header />
      <section className='album-container'>
        {data.albums.items.map((item) => {
          return <Album key={item.id} albumTitle={item.name} image={item.images[1].url} artists={item.artists[0].name} url={item.url} />
        })}
      </section>
    </div >
  )
}