import React from 'react';
import data from './data.json';
import Header from './components/Header'
import Cover from './components/Cover'
import Albumname from './components/Albumname';
import Artistname from './components/Artistname';
import "./index.css";

console.log(data);

export const App = () => {
  return (
    <div>
      <div class="Header">
       <Header /> 
      </div>
      <div className='music-container'>
      {data.albums.items.map (item => {
       return <>
        <div className='eachCover'><Cover key={item.id} data={item} img={item.images} /> </div>
        <div><Albumname album={item.name} /></div>
        <div><Artistname artists={item.artists} artistUrl={item.artists}/></div></>
      })}
      </div>
     Hello Tika and Viktor
    </div>
  );
}

//we're declaring a variable "data" and {item} is the value. so we connect the varibale Line 15