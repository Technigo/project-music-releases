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
    <div className='all-container'>
      <div className="Header"> 
       <Header /> 
      </div>
      <div className='music-container'>
      {data.albums.items.map (item => {
       return <>
        <div className='theAlbums'>
          <Cover key={item.id} data={item} img={item.images}/> 
          <Albumname Albumname={item.name} urlAlbumname={item.name}/>
          <Artistname artists={item.artists} artistUrl={item.artists}/>
        </div>
        </>
      })}
      </div>
      <div className='Footer'>
     <h3>Project Music Release for Technigo by Viktor & Kartika</h3>
     </div>
    </div>
  );
}

//we're declaring a variable "data" and {item} is the value. so we connect the varibale Line 15