import React from 'react';
import Artist from './Artist';
import Buttons from './Buttons';
import '../album.css';

const Albums = (props) => {
  return (
    <div className="album">
      <div className="coverAndButtons">
        <div className="image" />
        <img
          src={props.data.images[1].url}
          className="albumCover"
          alt={props.data.name} />
        <div className="icons">
          <Buttons />
        </div>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.data.external_urls.spotify}
        key={props.data.id}
        className="albumName">
        {props.data.name}
      </a>
      <Artist artists={props.data.artists} />
    </div>
  );
};

export default Albums;
