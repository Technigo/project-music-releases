import React from 'react'
import data from './data.json'

import Album from './Album'


// // ALL ALBUM
const albumArray = data.albums.items
console.log(albumArray)

export const App = () => {
  return (
    <>
    <div className="main">
      <div className="headerContainer">
        <h1 className="heading">New albums & singles</h1>
      </div>
      <div className="albumWrapper">

        {albumArray.map((album, index) => {
              return (
              <Album image={album.images[0].url} title={album.name} artist={album.artists[0].name} key={index}/>
              )
          })
        }
      </div>
    </div>
    </>
  )
}
