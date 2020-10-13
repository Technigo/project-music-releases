import React from 'react'
// import { Albumsname } from './Albumsname'
// import { Albumimage } from './Albumimage'
// import { Albumartistname } from './Albumartistname'
import { Card } from './Card'
import data from './data.json'
import Header from './Header'

// console.log(data.albums.items[0].name)
// const name = data.albums.items[0].name
// console.log(data.albums.items[0].images[0].url)
// console.log(data.albums.items[0].external_urls.spotify)

// console.log(data.albums.items[0].artists[0].name)
// console.log(data.albums.items[0].artists[0].external_urls.spotify)

// const shortarray = () => { data.slice(0,7);

// console.log(shortarray);
// }

// shortarray();

export const App = () => {

  return (
    <> 
      < Header />
      < Card name={data.albums.items[0].name} image={data.albums.items[0].images[0].url} artistname={data.albums.items[0].artists[0].name}/> 
      < Card name={data.albums.items[1].name} image={data.albums.items[1].images[0].url} artistname={data.albums.items[1].artists[0].name}/> 
    </>
  );
}