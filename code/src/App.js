import React from 'react'
import data from './data.json'
import  { Headline }  from './components/Headline'
import { Album } from './components/Album'

// Creating const albums and adding the value of all the album information

const albums = data.albums.items;
console.log(albums)

export const App = () => {
  return (
    <>

    <Headline />
      <div className="main">
        {albums.map((album) => {   // .map to loop through albums and extract the correct values from the array
        return <Album key={album.name}
        albumLink={album.external_urls.spotify}
        cover={album.images[1].url}
        name={album.name}
        artists={album.artists[0].name} 
        artistLink={album.artists[0].external_urls.spotify}/>
      })}
      </div>
    </>
  )}