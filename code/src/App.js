// here the jorney begins 
// this file is component 
// componenets begins always with capital letter
// every conponenet is a variable 

// if it underfined react will not show it in the page
import React from 'react'
import data from './data.json'

// importerar article from article.js to app.js
import { Header } from './components/Header'
import { Album } from './components/Album'


const albumsArray = data.albums.items // getting albums array from the object and putting in a variable 
console.log(albumsArray)

// const allArtists = albumsArray.map(album => album.artists)
// console.log(allArtists)

export const App = () => {
  return (
    <> 
      <header>
        <Header />
      </header>
      <main className="albums-container">
      
      {albumsArray.map((album) => {
        console.log(album)
        return (
          <Album 
          key={album.name}
          image={album.images[0].url} 
          title={album.name}
          href={album.external_urls.spotify}
          artist={album.artists.map((item, index) => <a key={item.name} href={item.name}>{item.name}</a>)} 
          hrefArtist = {album.artists.map((url, index) => <a key={url.id} >{url.external_urls.spotify}</a>)}
          />

        )
       
      })}
      {/* {albumsArray.map((album) => {
       console.log(album)
        return <Album 
        key={album.id} 
        href={album.external_urls.spotify}
        name={album.name}
        imgsrc={album.images[1].url}
        artists={album.artists}
        />
      })}   */}
      </main>
    </>
  )
}


// JSX, every comp will return somekind of html 
// if you want to write more code you can put ( )after return, wrap inside ()
// props is the data that you can pass, properties is props, custom attributes
// fundamental of react and state
// by default can you export only one thing 
// componenet is just a function that we can pass information 