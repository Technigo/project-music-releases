import React from 'react'
import data from './data.json'
import { Albums } from './Components/Albums'
import { Heading } from './Components/Heading'
import { Artists } from './Components/Artists'
import './App.css'


export const App = () => {

  return (
    <>
      <div className='main-container'>
        <Heading />

      <section  className='album-cards-container'>
          {data.albums.items.map(album => (
            <Albums 
            key={album.id}
            albumContent={album}
            />
          ))}
          
        
          <>
             {data.albums.items.map(albums => (
            <Artists
            key={albums.href}
            albumContent={albums}
            />
          ))}
          </>

      </section>
      </div>  
    </>
  )
}
