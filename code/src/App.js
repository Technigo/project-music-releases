import React from 'react';
import data from './data.json';
import Album from './components/album';

export const App = () => {
  return (
    <div>
      <main className="albums">
        {data.albums.items.map((item) => {
          return <Album
            key={item.id}
            name={item.name}
            artists={item.artists} />
        })}
      </main>
    </div>
  );
};
