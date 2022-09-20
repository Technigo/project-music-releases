import React from 'react';
import data from './data.json';
import { Album } from "./components/Album";
/* import { Name } from "./components/Name"; */
import { Artist } from "./components/Artist";

console.log(data);

export const App = () => {
  return (
    <>
      <h1>Test Header</h1>

      <container> 
        {data.albums.items.map(items => {
          return <Album key={items.id} href ={items.external_urls.spotify} images={items.images[0].url}
          albumName={items.name}  />
        })}
        <Album />
        <Name />
        <Artist />
        
        {data.albums.items.map(names => {
          return < Artist key={names.id} artistName={names.artists.name} /> 
        })}
        
      </container>  
    </>
  );
}
