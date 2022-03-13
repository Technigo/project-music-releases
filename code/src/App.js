// Imopterat data från react och json.
import React from 'react'
import data from './data.json'

// components lägger vi in här.
import Footer from './components/Footer'
import MainHeader from './components/MainHeader'
import Album from './components/Album'

// Här bygger vi våran hemsida, kom ihåg att skriva in className="" ist för class="" för css styleing!!  :)

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
