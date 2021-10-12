import React from 'react';

import Artists from './Artists';

const Album = (props) => {
  const { key, src, title, artistsArray } = props;
  return (
    <article className="song-card">
      <img className="song-image" src={src} alt="album cover" />
      <h2 className="title">{title}</h2>
      <Artists artistsArray={artistsArray} />
    </article>
  );
};

export default Album;
