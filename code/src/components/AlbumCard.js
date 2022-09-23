import React from 'react';

const AlbumCard = (props) => {
  return (
    <div>
      <div className="Cover">
        <a href={props.url}>
          <img src={props.img} alt="Album cover" className="album-cover" />
        </a>
      </div>
      <p className="AlbumName">
        <a href={props.url}>{props.name}</a>
      </p>
    </div>
  );
};

export default (AlbumCard);