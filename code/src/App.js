import React from 'react';
import data from './data.json';
import Header from './components/Header'
import Cover from './components/Cover'
import Albumname from './components/Albumname';
import Artistname from './components/Artistname';
console.log(data);

export const App = () => {
  return (
    <div>
      <div class="Header">
       <Header /> 
      </div>
      {data.albums.items.map (item => {
       return <><Cover key={item.id} data={item} img={item.images} /> 
                <Albumname album={item.name} />
                <Artistname artists={item.artists} artistUrl={item.artists}/></>
      })}
     Hello Tika and Viktor
    </div>
  );
}

//we're declaring a variable "data" and {item} is the value. so we connect the varibale Line 15