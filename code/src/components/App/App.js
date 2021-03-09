import React from 'react';
import data from 'data.json';
import './App.css';
import Album from 'components/Album/Album';

console.log(data);

const App = () => {
  return (
    <>
      <header className="section-wrapper ">
        <h1>New Albums & Singles</h1>
      </header>
      <main className="section-wrapper album--wrapper">
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
      </main>
    </>
  );
};
export default App;
