import React from 'react'

//import Artist from './components/Artist';
import Album from './components/Album';
import Header from './components/Header';

import data from './data.json'

console.log(data);

const albumArray = data.albums.items; 

export const App = () => {
  return (
    <>
      <div className="main">
        <Header />
        {albumArray.map(item => (
          <Album key={item.id} albumContent={item} />
        ))}
      </div>
    </>
  )
}

