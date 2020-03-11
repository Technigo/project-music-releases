import React from 'react'
import data from './data.json'
import './app_style.css'
import { Album } from './components/Album'

// console.log(data.albums.items[0].name) // Song title
// console.log(data.albums.items[0].artists[0].name) // Artist name
// console.log(data.albums.items[0].images[1].url) // Picture
// console.log(data.albums.items[0,1, 2, 3, 4].name)
// console.log(data.albums)
  
export const App = () => {
  // logic here
  return (
    <div className="main-app-container">
      <div className="main-wrapper"> 
        <div className="text-on-top">
          <p>New albums & singles</p>
        </div>
        <div className="main-album-container">
        {data.albums.items.map((album) => {
          return ( 
          <Album key={album.artists[0].id} name={album.artists[0].name} 
            title={album.name}
            image={album.images[1].url}
            linkArtist={album.artists[0].external_urls.spotify} 
            linkAlbum={album.external_urls.spotify}
            />
            )
        })}
        {/* Find me in src/app.js! */}
    

        </div>
      </div>
    </div>
  )
}


