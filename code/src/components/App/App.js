import React from 'react';
import data from 'data.json';
import './App.css';
import Album from 'components/Album/Album';

// console.log(data);

const App = () => {
  const albums = data.albums.items;
  return (
    <>
      <header className="section-wrapper ">
        <h1>New Albums & Singles</h1>
      </header>
      <main className="section-wrapper album--wrapper">
        {albums.map((album) => (
          <Album
            key={album.id}
            name={album.name}
            image={album.images[0].url}
            artists={album.artists}
            url={album.external_urls.spotify}
          />
        ))}
      </main>
    </>
  );
};
export default App;
