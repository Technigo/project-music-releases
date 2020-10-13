import React from 'react'
import data from './data.json'
import { Header } from './components/Header.js'
import { Album } from './components/Album.js'
import { Artist } from './components/Artist.js'

console.log(data.albums.items[0].artists[0].name)
console.log({Artist})

export const App = () => {
  return (
    <>
      <Header />
      <div className="Album-container">
        {data.albums.items.map((item) => {
           return <Album key = {item.id}
           albumTitle = {item.name}
           image = {item.images[0].url}
           />
        })}
      </div>
    </>
  );
}
