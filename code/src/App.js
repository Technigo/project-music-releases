import React from 'react'
import { Header } from './components/Header'
import { Album } from './components/Album'
import data from './data.json'
import './app.css'

 
console.log(data);
const albumArray = data.albums.items;

export const App = () => {
  return (
    <>
      <Header headerText="New albums &amp; singles"/>
      <section className="albumList">
        

        {/* Mappar igenom allt under items, anropar Album.js för varje album i data.json. Skickar med props. */}
        {albumArray.map(album => (
          <Album key={album.id} album={album}/>
        ))}
      </section>
    </>
  )
}
