import React from 'react';
import data from 'data.json';
import './App.css';
import Album from 'components/Album/Album';

console.log(data);

const App = () => {
  return (
    <>
      <header>
        <h1>Page Header</h1>
      </header>
      <main>
        <Album />
      </main>
    </>
  );
};
export default App;
