import Artists from 'components/Artists';
import 'index.css'
import React from 'react';

// props = { album }

const Album = (props) => {
  return (
    <div className="album-container">
      <a className="albumcover" href={props.albums.external_urls.spotify} target="_blank" rel="noreferrer noopener">
        <div className="album-img">
          <img src={props.albums.images[0].url} alt="album-cover" />

        </div>
      </a>
      <a href={props.albums.external_urls.spotify} target="_blank" rel="noreferrer noopener">
        <p className="albumName">{props.albums.name}</p>
        <Artists artists={props.albums.artists} />
      </a>
    </div>
  );
};

export default Album;