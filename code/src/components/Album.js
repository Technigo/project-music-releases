import React from 'react';

import Artists from './Artists';
import IconsOverlay from './IconsOverlay';

const Album = (props) => {
  const { src, title, artistsArray, albumURL } = props;
  return (
    <article className='song-card'>
      <div className='album-art-container'>
        <img className='song-image' src={src} alt='album cover' />
        <IconsOverlay />
      </div>
      <a href={albumURL}>
        <h2 className='title'>{title}</h2>
      </a>
      <Artists artistsArray={artistsArray} />
    </article>
  );
};

export default Album;
