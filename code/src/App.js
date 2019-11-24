import React from 'react'
import data from './data.json'
import { Header } from 'Header.js'
import { Cards } from './Cards'
import { Footer } from 'Footer.js'
import 'App.css'

console.log(data.albums.items)
console.log(data)

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="album-section">
        {data.albums.items.map((item) => (
          <Cards
            image={item.images[1].url}
            key={item.id}
            artistUrl={item.artists[0].external_urls.spotify}
            item={item}
            albumUrl={item.external_urls.spotify}
            albumName={item.name} />
        ))

        }
        <Footer />
      </div>
    </div>
  )

}




// {data.albums.items.map((album) => {
//   return <div key={album.id}>
//     <img src={album.images[1].url} alt='Album cover'></img>
//     <br></br>
//     {album.name} -
// {album.artists[0].name}
//     <br></br>
//     <a href=
//       {album.artists[0].external_urls.spotify}>Link</a>
//     <hr></hr>

//   </div>
// })}

// { <h1>ALBUMS</h1>
// {<Albums />}
// <h1>ARTISTS</h1>
// {<Artists />}
// <h1>IMAGES</h1>
// {<Images />}
// <h1>LINKS</h1>
// {<Links />} }

