import React from 'react';
import data from '../data.json';

console.log(data)

export const Albumcovers = () => {
  return (
    <div>
    <h2 style={{color:'blue'}}>HELLO COVERS!!</h2>
      {data.albums.items.map((covers) => {
        return (
          <div>
            <img class="cover image" src={covers.images[2].url} />
          </div>)
      })}
    </div>
  )
}

// we dont need to do the map we can only use the index right away