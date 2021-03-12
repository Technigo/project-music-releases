import React from 'react'
import data from './data.json'
import { Albums } from './Components/Albums'
import { Heading } from './Components/Heading'
import { Artists } from './Components/Artists'
import { AlbumTitle } from './Components/AlbumTitle'
import { TypeOf } from './Components/TypeOf'
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

                  <div className="artist-container">
                    {album.artists.map((artistname) =>
                       <Artists 
                       key={artistname.id}
                       artist={artistname.name}
                       artistURL={artistname.external_urls.spotify}
                       />
                    
                      )}                   
                  </div>

                  <div className="type-of-container">
                    < TypeOf 
                      type={album.album_type}
                    />
                  </div>
                
                </div>
              </div>
          ))}
        </section>
      </div>  
    </>
  )
}
