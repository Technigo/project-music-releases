import Album from 'component/Album';
import Artist from 'component/Album';

import React from 'react';
import data from './data.json';

console.log(data)

export const App = () => {
  return (
    <section>
    <div className="album-box">
    {data.albums.items.map((singleAlbum) => {
          <Album 
            key={singleAlbum.id} 
            albumDetails={singleAlbum}/>
            })}
        {data.album.artists.map((artist) => (
          <Artist
            key={artist.id}
            name={artist.name}
            url={artist.external_urls.spotify}
          />
          ))}
        </div>
    </section>
  )
}
