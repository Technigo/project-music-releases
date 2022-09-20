import React from 'react';
import data from './data.json';
import Image from './components/Image';

console.log(data);

export const App = () => {
  return (
    <>
      {data.albums.items.map((item) => {
        return <Image key={item.id} data={img src={item}/>
              /* <img src={album.image} alt={album.title} /> */
      })}
    </>
  );
}
