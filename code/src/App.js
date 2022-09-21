import React from 'react';
import data from './data.json';
import { Album } from "./components/Album";
import { Name } from "./components/Name"; 
import { Artist } from "./components/Artist";

console.log(data);

export const App = () => {
  return (
    <>

   
       {/* map out data.json so we can use "album" in Album.js*/ }
      <section className="main-container">
        {data.albums.items.map((album) => {
          return <Album key={album.id} album={album} />;
        })}
        </section>
        
        {/* {data.albums.items.map(names => {
          return < Artist key={names.id} artistName={names.artists.name} /> 
        })} */}

      

        
     
    </>
  );
}
