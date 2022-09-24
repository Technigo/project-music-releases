import React from 'react'
import data from './data.json'
import Album from './components/Album'
import Playlist from './components/Playlist'


export const App = () => {

 
    const albumArray = data.albums.items
        return ( 
          <>
          <Playlist playlistName="" hrefPlaylist=""/>
          <main>
          <header>
            <h1>New albums & singles</h1>
          </header>
          <section className="album-container">
          
          {albumArray.map((album) => {
              return (
                  <Album 
                  image={album.images[0].url}
                  title={album.name} 
                  hrefAlbum={album.external_urls.spotify} 
                  artist={album.artists.map((item) => <a>{item.name}</a>)}
                  hrefArtist={album.artists.map((item) => item.external_urls.spotify)}
                  key={album.id}/>
                )
              })
            }
          </section>
          </main>
          </>
        
        )
      
      
    
}
 


