import React from 'react';
import data from './data.json';
import {Album} from './components/Album.js'

console.log(data);

export const App = () => {
  return (
    <>
    <div className='Wrapper'>
    {data.albums.items.map(item => {
      return <Album key={data.id} data = {item}/>
    })}
     </div>
    </>
  );
}