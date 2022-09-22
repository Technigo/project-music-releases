import React from 'react';

const AlbumCard = (props) => {
  return (
    <div className="Cover">
      <a href={props.url}>
        <img src={props.img} alt="Album cover" />
      </a>
      <a href={props.url}>
        <p className="AlbumName">{props.name}</p>
      </a>
    </div>
  );
};

export default (AlbumCard);