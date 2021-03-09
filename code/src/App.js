// import React from 'react'
// import data from './data.json'
// import { Album } from "./Album"

// console.log(data)
// console.log(data.albums.items[0].name)


// export const App = () => {
//   return (
//     <div>
//       <Album />
//       <h1> Test Info</h1>
//        {data.albums.items[0].name}
//       {data.albums.items[0].artists[0].name}
//       <img src={data.albums.items[0].images[0].url} alt="" width="500" height="600"></img>
//     </div>
//   )
// }


import React from 'react';
import data from './data.json';
import { Album } from './components/Album';
import { Header } from './components/Header';
import './index.css';

// Extracts array with 50 album objects from main data object
const albumsArray = data.albums.items;

/* Here on App.js we extract the data from the json object via props and use
those properties' names in the components */

export const App = () => {
  return (
    <>
      <Header />
      <div className="albums-container">
        {albumsArray.map((album) => {
          return <Album
            key={album.name}
            name={album.name}
            imgsrc={album.images[0].url}
            artists={album.artists}
            albumurl={album.external_urls.spotify} />
        })}
      </div>
    </>
  );
};
