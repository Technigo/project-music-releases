import React from 'react'
import data from './data.json'
import { Albums } from './Components/Albums'
import { Heading } from './Components/Heading'
import { Artists } from './Components/Artists'
import { AlbumTitle } from './Components/AlbumTitle'
import './App.css'


export const App = () => {

  return (
    <>
      <div className='main-container'>
        <Heading />

        <section  className='album-cards-container'>
            {data.albums.items.map(album => (
              <div className="album-cards">
                <Albums 
                key={album.id}
                albumContent={album}
                />

                <div className="album-cards-text">
                  <AlbumTitle 
                   albumContent={album}
                  />
                  <Artists 
                  albumContent={album}
                  />
                </div>
              </div>

          ))}
        </section>
      </div>  
    </>
  )
}
