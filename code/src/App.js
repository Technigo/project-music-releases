import React from 'react';
import data from './data.json';
import { Album } from "./Album";

console.log(data)
//array of objects
const albumArr = data.albums.items;
export const App = () => {
  return (
    <>
      <h1 className="site-header">New albums &#38; singles</h1>
      <div className="albums">
        {albumArr.map((album) => {
          //props are passed into components like HTML attributes props ="" or props = {}
          //unique key prop is required (how do you know what key is unique in massive arrays?)
          return <Album key={album.name} name={album.name} img={album.images} album_url={album.external_urls.spotify} artists={album.artists} />
        }
        )}
      </div >
    </>
  )
}




console.log(albumArr);