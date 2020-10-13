import React from 'react'
import { Albumsname } from './Albumsname'
import { Albumimage } from './Albumimage'
import { Albumartistname } from './Albumartistname'
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
    <section>
      < Header />
      < Albumsname name={data.albums.items[0].name} />
      < Albumsname name={data.albums.items[1].name} />
      < Albumsname name={data.albums.items[2].name} />
      < Albumsname name={data.albums.items[3].name} />
      < Albumsname name={data.albums.items[4].name} />
      < Albumsname name={data.albums.items[5].name} />
      < Albumsname name={data.albums.items[6].name} />
      < Albumsname name={data.albums.items[7].name} />
    </section>
    <section>
      <Albumimage image={data.albums.items[0].images[0].url} />
      <Albumimage image={data.albums.items[1].images[0].url} />
      <Albumimage image={data.albums.items[2].images[0].url} />
      <Albumimage image={data.albums.items[3].images[0].url} />
      <Albumimage image={data.albums.items[4].images[0].url} />
      <Albumimage image={data.albums.items[5].images[0].url} />
      <Albumimage image={data.albums.items[6].images[0].url} />
      <Albumimage image={data.albums.items[7].images[0].url} />
    </section>
    <section>
      <Albumartistname artistname={data.albums.items[0].artists[0].name} />
      <Albumartistname artistname={data.albums.items[1].artists[0].name} />
      <Albumartistname artistname={data.albums.items[2].artists[0].name} />
      <Albumartistname artistname={data.albums.items[3].artists[0].name} />
      <Albumartistname artistname={data.albums.items[4].artists[0].name} />
      <Albumartistname artistname={data.albums.items[5].artists[0].name} />
      <Albumartistname artistname={data.albums.items[6].artists[0].name} />
      <Albumartistname artistname={data.albums.items[7].artists[0].name} />
    </section>
    </>
  );
}