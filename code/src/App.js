import React from 'react'
import data from './data.json'
import Controls from './Components/Controls/Controls.js'
// album
import './Components/Album/Album.css'

console.log(data)

const App = () => {
  return (
   <div>
     <h1>New albums and singles</h1>
     <div className="main-container">
     {data.albums.items.map(album => (
         <div key={album.id} className="album-container">

           {/*  Album cover & album contorls  */}
            <div className="album-cover">
              <img src={album.images[1].url} alt="" />
              <Controls />    
            </div>

            <div className="album-texts">
              <a href={album.external_urls.spotify} className="album-title">
                {album.name}
              </a> 
            
              {album.artists.map(artist => (
                  <a className="artist-title" href={artist.external_urls.spotify}>
                    {artist.name}
                  </a>
                ))}
           </div>
         </div>
       ))}
     </div>
   </div>

  )
}

export default App