import React from "react";
import data from './data.json';
import { Album } from "./components/Album";
import { Header } from "./components/Header";
import './index.css';

const albumsArray = data.albums.items; //Extracts array with 50 album objects from main data object

//console.log(albumsArray);

//Here on App.js we extract the data from the json object via props and use those properties' names in the components

export const App = () => {
  return (
    <>
      <Header />
      <div className="albums-container">
        {albumsArray.map((album) => {
          return <Album key={album.name} 
          name={album.name}
          imgsrc={album.images[0].url}
          artists={album.artists} 
          albumurl={album.external_urls.spotify} />
        })}
      </div>
    </>
  );
};