import React from 'react';
import data from './data.json';
import './index.css';
import { Header } from "components/Header";
//import { Artists } from "components/Artists";


/*
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
}*/


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
export default App