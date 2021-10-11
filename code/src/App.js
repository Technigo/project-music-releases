import React from 'react'
import data from './data.json'
import Album from './Album /Album'
import Header from './Header/Header'
import Footer from './Footer/Footer'

console.log(data)

const App = () => {
  const albumArray = data.albums.items

  return (
    <div>
      <Header />
      {albumArray.map((album) => {
        return (
          <div>
            <Album image={album.images[0].url}
              albumTitle={album.name}
              albumLink={album.external_urls.spotify}
              artistName={album.artists.map((artist) => {
                return artist.name
              })}
              artistLink={album.artists.map((artist) => {
                return artist.external_urls.spotify
              })}
            />
          </div>
        )
      })}
      <Footer />
    </div>
  )
}

export default App