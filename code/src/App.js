import React from 'react'
import data from './data.json'

// components Are here
import Footer from './components/Footer'
import MainHeader from './components/MainHeader'
import Album from './components/Album'

// Here we are bulding the website but we need to classname for the css and not just class as u do in regaular html

export const App = () => {
  return (
    <main className="main-container">
      <MainHeader />
      <hr className="horizontalLine" />
      <div className="music-container">
        {data.albums.items.map((album) => (
          <Album
            img={album.images[1].url}
            title={album.name}
            albumLink={album.external_urls.spotify}
            artists={album.artists}
            key={album.name}
          />
        ))}
      </div>
      <Footer />
    </main>
  )
}
