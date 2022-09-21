import React from 'react';
import data from './data.json';
import {Header} from './components/Header';
import {Album} from './components/Album';

console.log(data);

export const App = () => {
  return (
    <>
      <Header />
      {data.albums.items.map(item => {
        return <Album key={data.id} data = {item}/>
      })}
    </>
  );
}
