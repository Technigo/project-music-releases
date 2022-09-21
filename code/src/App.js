import React from 'react';
import data from './data.json';
import './index.css';


import { Header } from "components/Header";
//import { AlbumCover } from "components/AlbumCover";

console.log(data);

export const App = () => {
  return (
    <>
      <Header />
        <div className="albums-container">
          {data.albums.items.map((item) => {
            return <div key={item.id}>{item.name}</div>;
        })}
      
        </div>
    
    </>
  );
};
