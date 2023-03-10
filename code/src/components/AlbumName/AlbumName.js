import React from 'react';
import './AlbumName.css';

const AlbumName = (props) => {
  return (
    <div className="AlbumName">
      <a
        href={props.singleAlbumItem.external_urls.spotify}
        target="_blank"
        rel="noreferrer noopener">
        <h3>{props.singleAlbumItem.name}</h3>
      </a>
    </div>
  );
}

export default AlbumName;