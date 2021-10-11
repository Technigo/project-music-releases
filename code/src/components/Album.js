import React from 'react';

const Album = (props) => {
  return (
    <article className="song-card">
      <img className="song-image" src={props.src} alt="album cover" />
      <h2 className="title">{props.title}</h2>
      <h3 className="artist">{props.artist}</h3>
    </article>
  );
};

export default Album;
