import React from 'react'
import data from './data.json'

console.log(data)

export const App = () => {
  return (
    <div className="App">
      {data.albums.items.map(item => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};
