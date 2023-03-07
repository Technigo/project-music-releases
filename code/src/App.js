import React from 'react';
import data from './data.json';
import Header from './components/Header'
import Album from './components/Album'

console.log(data);

export const App = () => {
  return (
    <div>
      <Header title="New albums and singles" />
      <div className="album-container">
        {data.albums.items.map((item) => {
          return (
            <Album
              key={item.id}
              img={item.images[1].url}
              albumName={item.name}
              albumLink={item.external_urls.spotify}
              artists={item.artists} />
          );
        })}
      </div>
    </div>
  )
};