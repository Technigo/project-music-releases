import React from 'react';

const AlbumCard = (props) => {
  return (
    <div>
      <div className="Cover">
        <a href={props.url}>
          <img src={props.img} alt="Album cover" />
        </a>
      </div>
      <a href={props.url}>
        <p className="AlbumName">{props.name}</p>
      </a>
    </div>
  );
};

export default (AlbumCard);

// @ Add Album and Artist links
