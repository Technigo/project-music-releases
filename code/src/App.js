import React from 'react';
import Header from 'components/Header'
import Album from 'components/Album';
import 'style/styling.css'
import 'index.css'
import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <main className="wrapper">
      <Header className="title" title="Albums and singles" />
      <div className="grid-parent">
        {data.albums.items.map((singleAlbum) => (
          <Album key={singleAlbum.id} album={singleAlbum} />
        ))}
      </div>
    </main>
  );
};
export default App;

