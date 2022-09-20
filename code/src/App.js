import React from 'react';
import data from './data.json';
const albumsArray = data.albums.items

import  Album   from './components/Album';
import  Header  from './components/Header';

import './index.css';
console.log(data);

export const App = () => {
  return (
    <>
    <Header/>
       <main className='album-container'>
         <Album albumsArray = {albumsArray}/>
       </main>

     </>
   )
 }
