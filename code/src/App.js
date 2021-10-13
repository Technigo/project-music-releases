import React from 'react'
import data from './data.json'
import Album from './Album/Album'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Artist from './Artist/Artist'
import Playlists from 'Playlists/Playlists'


const App = () => {
  const albumArray = data.albums.items;

  return (
    <>
      <Header />
      <div className='main'>
        <Playlists />
        <div className="album-wrapper">
          {albumArray.map((album) => {
            return (
              <div className="album-card" key={album.id}>
                <Album
                  image={album.images[0].url}
                  albumTitle={album.name}
                  albumLink={album.external_urls.spotify} />
                <div className="artists">
                  {album.artists.map((artist, index) => {
                    if (index === 0) {
                      return <Artist key={artist.id} artistLink={artist.external_urls.spotify}
                        artistName={artist.name} />
                      // } else if (index === arr.length - 1) {
                      //   return <>
                      //     <span> &nbsp; & &nbsp; </span>
                      //     <Artist key={artist.id} artistLink={artist.external_urls.spotify}
                      //       artistName={artist.name} />
                      //   </>
                    } else if (index === 1) {
                      return <>
                        <span> &nbsp; , &nbsp; </span>
                        <Artist key={artist.id} artistLink={artist.external_urls.spotify}
                          artistName={artist.name} />
                      </>
                    } else {
                      return <>
                        <span>&nbsp; & &nbsp;</span>
                        <Artist key={artist.id} artistLink={artist.external_urls.spotify}
                          artistName={artist.name} />
                      </>
                    }
                  })
                  }
                </div>
              </div>
            )
          }
          )
          }
        </div >
      </div >
      <Footer />
    </>
  )
}



export default App