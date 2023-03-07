import React from 'react';
import data from './data.json';
import Album from './components/Album';

console.log(data);

export const App = () => {
  return (
    <div>
      <h1 className="title">New albums & singles</h1>
      <hr />
      <Album data={data} />
    </div>
  );
};
