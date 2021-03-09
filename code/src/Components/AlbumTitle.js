import React from 'react';

const AlbumTitle = (props) => {
  return (
    <div>
      <a href={props.item.external_urls.spotify}>
      <h2 className="album-title">{props.item.name} </h2></a>
    </div>
  );
}

export default AlbumTitle;