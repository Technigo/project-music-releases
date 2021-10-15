import React from 'react'
import data from './data.json'

import { Album } from './components/Album'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div className="site-container">
      <Header />
        <div className="container">
          {data.albums.items.map((item) => {
            return <Album
              img = {item.images[1].url}
              title = {item.name}
              artist={item.artists.map((item) => 
                <a className="artistLink" href={item.external_urls.spotify} key={item.name} target="_blank" rel="noopener noreferrer"> 
                  <span>{item.name}</span> 
                </a>) }
              albumLink = {item.external_urls.spotify}
              key = {item.name}
              />
            }
          )}
        </div>
      <Footer />
    </div>
  )
}