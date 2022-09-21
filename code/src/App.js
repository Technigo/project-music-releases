import React from 'react';
import data from './data.json';
import Header from './Components/Header';
import Album from './Components/Album'
import Artist from './Components/Artist'
import Image from './Components/Image'

console.log(data);

export const App = () => {
  return (
  <>{data.albums.items.map (item => {
    
      
  return <Album key={data.id} data = {item}/>
  

    })}
    </>
    
  );
}
