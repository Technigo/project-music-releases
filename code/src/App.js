import React from 'react'
import data from './data.json'
import {Album} from './Album.js'
import {Header} from './Header'
import './index.css'


console.log(data)

const albumArray = data.albums.items



export const App = () => {
  return (
  <>
  <Header/>
    <div className="main">
      {albumArray.map((album) => {
        return (  
          <Album key={album.name} name={album.name} picture={album.images[0].url} albumurl={album.external_urls.spotify} artist={album.artists.map((item) => 
            <a className="link" key={item.name} href={item.external_urls.spotify}><h3 className="artist-name">{item.name}</h3></a>
          )
      }/>) })}
    </div>
    </>
        )
}
