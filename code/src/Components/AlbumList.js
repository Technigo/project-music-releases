import React from 'react';
import data from '../data.json';

import AlbumTitle from './AlbumTitle'
import AlbumCover from './AlbumCover'
import Artists from './Artists';

// moved up container, as it should not be created for each album. only once
const AlbumList = () => {
  return (
    <>
    <div className="music-container" >

      {data.albums.items.map ((item) => (
        <div className="music-card"key={item.id}>
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
      ))}
    </div>
    </>
  );
}

export default AlbumList;