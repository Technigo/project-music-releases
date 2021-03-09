import React from 'react';
import data from '../data.json';
import AlbumTitle from './AlbumTitle'
import AlbumCover from './AlbumCover'
import Artists from './Artists';

const AlbumList = () => {
  return (
    <>
     {data.albums.items.map ((item) => (
      <div className="music-container">
        <div className="music-card">
        <AlbumCover
        key={item.image}
        item={item}
        />

        <AlbumTitle
        key={item.name}
        item={item}
        />

        <Artists
        key={item.artists}
        item={item}
        />
        </div>
      </div>



     ))}

    </>
  );
}

export default AlbumList;