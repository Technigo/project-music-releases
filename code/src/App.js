import React from 'react'
import { Album } from './components/Album'
import data from './data.json'
import './app.css'


console.log(data.albums.items[0].artists[0].name);
console.log(data);

export const App = () => {
  return (
    <section className="albumList">

      {/* Mappar igenom allt under items, anropar Album.js för varje album i data.json. Skickar med props. */}
      {data.albums.items.map(album => (
        <Album key={album.id} album={album}/> //måste ha en unik key
      ))}
    </section>
  )
}
