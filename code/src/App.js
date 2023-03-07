import React from 'react';
import AlbumComponents from 'Components/Albums';
import Header from 'Components/Header';

import data from './data.json';


console.log(data);

export const App = () => {
  return (
    <main className="wrapper">
      <Header />
      <div className="grid-parent">
        {data.albums.items.map((singleAlbum) => (
          <AlbumComponents key={singleAlbum.id} album={singleAlbum} />
        ))}
      </div>
    </main>
  );
}

export default App;