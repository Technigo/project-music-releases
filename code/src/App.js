import React from 'react'
import data from './data.json'

import Header from './components/Header'
import Album from './components/Album'

console.log(data)

export const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        {data.albums.items.map(item => {
            return <Album 
              key={item.id} 
              title ={item.name} 
              url={item.images[1].url} 
              artist={item.artists} />
          })}    
      </div>
    </>      
);
};
  
   

