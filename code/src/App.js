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
              // artist = {item.artists[0].name}

              artist={item.artists.map((item) => <a>{item.name}</a>)}





              albumLink = {item.external_urls.spotify}
              artistLink = {item.artists[0].external_urls.spotify}
              key = {item.name}
              />
            }
          )}

        </div>
    </div>
    
  )
}



//the name of each artist involved with a comma between
//When you click on the album, it should link to the album's external url in the data
//When you click on an artist, it should link to the artist's external url in the data//
