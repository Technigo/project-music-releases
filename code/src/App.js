import React from 'react'
import './index.css';
import Artists from 'Components/Artists'
import Header from 'Components/Header'
/* import Images from 'Components/Images' */
import Album from 'Components/Album';
import data from './data.json'

console.log(data);
export const App = () => {
  const imageIndex = 0; // index of the image you want to display
  return (
    <>
      <Header />
      <main className="parent-container">
        <div className="album-container">
          {data.albums.items.map((album) => (
            <div key={album.id}>
              <div className="Images">
                <img src={album.images[imageIndex].url} alt={album.name} />
              </div>
              <a href={album.external_urls.spotify}>
                <Album album={album} />
                <Artists artists={album.artists} />
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
