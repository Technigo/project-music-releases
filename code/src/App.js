import React from 'react';
import data from './data.json';
import Artwork from './components/Artwork'
import "./index.css";


console.log(data);

export const App = () => {
  return (
    <div className = 'music-container'>
      {data.albums.items.map (item => {
        return <>
        <div className = 'Albums'>
          <Artwork key={item.id} data={item} img={item.images}/>
        </div>
        </>
      })}    
    </div>
  );
}
