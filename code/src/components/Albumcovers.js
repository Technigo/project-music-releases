import React from 'react';
import data from '../data.json';
console.log(data)

export const Albumcovers = () => {
  return (
    <div>
    {data.albums.items.map((covers) => {
      return (
        <div>
        <img src={covers.images[2].url}></img>
        </div>)
    }
    
  )
}
</div>
)}
  
  
