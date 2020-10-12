import React from "react";
import data from './data.json';
import { Album } from "./components/Album";
import './index.css';

//console.log(data);

const albumsArray = data.albums.items;

//console.log(albumsArray);

export const App = () => {
  return (
    <div>
      <h1>New albums & singles</h1>
    <div className="albums-container">
      {albumsArray.map((album) => {
        return <Album key={album.name} 
        name={album.name} 
        />
      })}
    </div>
    </div>
  );
};