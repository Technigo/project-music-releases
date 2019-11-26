import React from 'react'
import data from './data.json'
import { Album } from "./Components/Album.js"
import "./App.css"


console.log(data)


export const App = () => {
  return (

    <div className="cards">

      {data.albums.items.map((item) => (
        <Album
          key={item.id}
          image={item.images[1].url}
          title={item.name}
          artist={item.artists[0].name}
          artistLink={item.artists[0].uri}
          albumLink={item.uri} />

      ))}
    </div>

  )

}


