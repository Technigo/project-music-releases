import React from 'react';
import data from './data.json';
import Image from './components/Image';

console.log(data);

export const App = () => {
  return (
    <>
      <div>
        <ImageCard />
      </div>
      <div>
        <Hello />
      </div>
    </>
  );
}
