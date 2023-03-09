import React from 'react';
import Album from 'components/Album';
import 'index.css'
import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <>
      <header className="head">
        <h1>New albums and singles</h1>
      </header>
      <main className="main-container">

        {data.albums.items.map((singleAlbum) => (
          <Album key={singleAlbum.id} albums={singleAlbum} />
        ))}
      </main>
    </>
  );
};
export default App;

