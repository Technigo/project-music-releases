import React from 'react';
import { Album } from 'components/Album';
import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <div>
      <h1>New albums & singles</h1>
      <section className="albumcontainer">
        {data.albums.items.map((album) => {
          return (
            <Album
              image={album.images[0].url}
              albumname={album.name}
              artistname={album.artists[0].name}
              albumurl={album.external_urls.spotify}
              artisturl={album.artists[0].external_urls.spotify} />
          )
      })}    
      </section>
    </div>
  );
}
