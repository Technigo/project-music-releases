import React from 'react';
import data from './data.json';
import {Album} from './components/Album.js'

console.log(data);

export const App = () => {
  return (
    <>
    {data.albums.items.map(item => {
      return <Album key={data.id} data = {item}/>
    })}
     
    </>
  );
}

/* export const App = () => {
  return (
    <div>Album</div>
  )
} */

//Made the Album-component work, don't know if it was the syntax in the const or in the import but now it works :) 
//I made a new folder to put all our components in.
//aaaaaand, then I tried to follow Daniels instructions to do components to print out album title and artists 