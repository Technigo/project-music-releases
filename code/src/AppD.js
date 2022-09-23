import React from 'react';
import data from './data.json';
import { HeaderD } from './components/HeaderD';

console.log(data);
// named export
export const AppD = () => {
  return (
    <>
      {/* <Header text = "testing the props"/> */}
      {data.albums.items.map((item) => {
        return <HeaderD key={item.id} data={item} text="testing the props" />;
      })}
    </>
  );
};
