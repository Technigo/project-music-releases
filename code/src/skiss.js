/*import React from 'react';
import data from './data.json';


import { Header } from "./components/Header";
import { Artists } from "./components/Artists";


export const App = () => {
  return (
    <>
    <Header/>
    <div>
      {data.albums.items.map(item => {
        return <div key={item.id}>
          {item.artists.map(item => {
            return <span key={item.id}>{item.name} </span>
          })}
        </div>;
      })}
    </div>
    </>
  )



;

export const App = () => {
  return (
    <>
      <Header />
        <div className="albums-container">
          {data.albums.items.map((item) => {
            return <div key={item.id}>{item.name}  
            <Artists key={item.id} items={item.name} />
            </div>;
        })}
      
        </div>
    
    </>
  );
}; 
}
*/