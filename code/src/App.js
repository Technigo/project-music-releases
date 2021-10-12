import React from 'react'
import data from './data.json'

import { Album } from './components/Album'
import { Header } from './components/Header'

console.log(data)


// Album component which is rendered using .map() and which you pass the album data into using props.

// Artist component which is rendered using .map() using each item in the artists array, 
// inside the Album component to show the artist name and a link.

export const App = () => {
  return (
    <div className="site-container">
      <Header />
        <div className="container">
          {data.albums.items.map((item) => {
            return <Album
              img = {item.images[1].url}
              title = {item.name}
              artist = {item.artists[0].name}
              key = {item.name}
              />
            }
          )}

        </div>
    </div>
    
  )
}




{/* <Album 
artist={data.albums.items[0].artists[0].name}
title={data.albums.items[0].name}
img={data.albums.items[0].images[1].url}
/> */}
