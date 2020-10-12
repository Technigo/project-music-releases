import React from 'react';
import data from './data.json';
import { Album } from "./Album";

console.log(data)
const albumArr = data.albums.items;
export const App = () => {
  return (
    <div>
      {albumArr.map((album) => {
        return <Album key={album.name} name={album.name} img={album.images} artists={album.artists} />
      }
      )}
    </div >
  )
}




console.log(albumArr);