import React from 'react'
import data from './data.json'
import stretchData from './stretch-goal.json'
import Album from './components/Album'
import Playlist from './components/Playlist'

console.log(data)
console.log(stretchData)


export const App = () => {

  return ( 
    <>  
      <main>
        <header>
          <h1>New albums & singles</h1>
        </header>

      <section className="album-container">
          {data.albums.items.map((album) => {
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

          <section className="playlistside">

          <div className="sidePlaylist">
            
              <a href="https://open.spotify.com/search/popular%20playlists" aria-label="Popular playlists" target="_blank">
                <h4>Popular playlists <img className="playlistIcon" src="./icons/play.svg" alt="play"/></h4></a>
           
            <div className="navlinkWrapper">
              <h5>Editor's picks</h5>
              
              {stretchData.playlists.items.map((playlist) => {
                return (
                    <Playlist 
                      playlistName={playlist.name} 
                      hrefPlaylist={playlist.external_urls.spotify} 
                      key={playlist.id}/>
                      )
                      })
                    }
              </div>
            </div>
          </section>
                
          
        
     </>
     
  )
}
 


