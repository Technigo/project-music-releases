import React from 'react'
import data from './data.json'
import { AlbumCard } from './components/AlbumCard'
import { Header } from './components/Header'

const albumArray = data.albums.items;
console.log(data)

export const App = () => {
    return (
      <main>
        <img class="spotifake-logo" src={require(`./components/icons/spotifake_logo.png`)}/>
        
        <Header />
        <div className="album-grid">
          {albumArray.map(album => (
            <AlbumCard 
            key={album.artists[0].id}
            albumName={ album.name }
            artistName={ album.artists[0].name }
            image={ album.images[0].url }
            albumURL={ album.external_urls.spotify }
            artistURL={ album.artists[0].external_urls.spotify }
            artists={ album.artists }
            />  
            
          ))}

        </div>
      </main>
    )
  }
  

