import React from "react";
import data from './data.json';
import { Album } from "./components/Album";
import { Header } from "./components/Header";
import './index.css';

//console.log(data);

const albumsArray = data.albums.items; //Extracts array with 50 album objects from main data object

//console.log(albumsArray);

export const App = () => {
  return (
    <>
      <Header />
    <div className="albums-container">
      {albumsArray.map((album) => {
        return <Album key={album.name} 
        name={album.name} 
        />
      })}
    </div>
    </>
  );
};