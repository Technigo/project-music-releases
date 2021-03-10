import React from 'react'
import data from './data.json'
import { Albums } from './Components/Albums'
import { Heading } from './Components/Heading'
import { Artists } from './Components/Artists'
import './App.css'


export const App = () => {

  return (
    
      <div className='main-container'>
        <Heading />

        <section  className='album-cards-container'>
          {data.albums.items.map(album => (
            <Albums 
            key={album.id}
            albumContent={album}
            />
            

          ))}
        </section>

      </div>             
  )
}


// {data.albums.items.map((album) => {
//   return ( 
//     <div className='album-card' key={album.id}>

// url={album.images[0].url}
//                 name={album.name}

/*<Artists />  */