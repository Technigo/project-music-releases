import React from 'react'
import data from './data.json'
import Album from './Album/Album'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Artist from './Artist/Artist'




const App = () => {
  const albumArray = data.albums.items;

  return (
    <div className='main'>
      <Header />
      <div className="album-wrapper">
        {albumArray.map((album) => {
          return (
            <div className="album-card" key={album.id}>
              <Album
                image={album.images[0].url}
                albumTitle={album.name}
                albumLink={album.external_urls.spotify} />
              <div className="artists">
                {album.artists.map(artist => {
                  return (
                    <Artist key={artist.id} artistLink={artist.external_urls.spotify}
                      artistName={artist.name} />
                  )
                })
                }

              </div>
            </div>
          )
        }
        )
        }
      </div >
      <Footer />
    </div>
  )
}



export default App