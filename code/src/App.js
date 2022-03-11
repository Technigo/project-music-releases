import React from 'react'
import data from './data.json'
import Album from "./components/Album";


export const App = () => {
  return ( 
   <>
    <h1 className='header'>New albums & singles</h1>
    <section className='album-container'>
      {data.albums.items.map(item => (
      <Album key={item.id} item={item} />
      ))}
      
    </section>
    </>
  );
}




