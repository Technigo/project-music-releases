import React from 'react';
import data from './data.json';
import Header from './components/Header.js';
import Album from './components/Album.js';

console.log('dataApp', data);

export const App = () => {
  return (
    <>
    <Header/>
    <div className="Album">
      {data.albums.items.map(item => {
        return <div key={item.id}>
          {item.name}</div>;
      })}
    </div>

    { 
    <div className="Image">
      {data.albums.items.map(item => {
        return <div key={item.id}>
          {item.images[1].url}</div>;
      })}
    </div> }


  

    
    

   

    </>
  );
};


// export const App = () => {
//   return (
//   <>
//     <Album/>
//     {data.album}
//   </>
//   );
// }