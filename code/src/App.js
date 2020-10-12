import React from 'react';
import data from './data.json';
import Card from './Card';

console.log(data);

export const App = () => {
  return (
    <div>
      <h1>New albums {'&'} singles</h1>
      <Card />
    </div>
  );
};
