import React from 'react'
import data from './data.json'
import { Artists } from 'Artists.js'
import './index.css'
import './App.css'
import { Heart } from './icons/Heart'
import { Dots } from './icons/Dots'
import { Play } from './icons/Play'

console.log(data)


export const App = () => {
  return (
    <div className="album-container" >
      {
        data.albums.items.map((item) => (
          <div className="album-card" key={item.id} >
            <div className="album-cover">
              <img className="image" src={item.images[0].url} />
              <div className="icons">
                <Heart />
                <Play />
                <Dots />
              </div>
            </div>
            <a href={item.external_urls.spotify} target="_blank"><h3>{item.name}</h3> </a>
            <p className="artists">
              <Artists artists={item.artists} />
            </p>
          </div>
        ))}
    </div>
  )
}
