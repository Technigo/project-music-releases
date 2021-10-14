import React from 'react';

const Album = (props) => {
  return (
    <a key={props.id} href={props.item.external_urls.spotify}>
      <h2 className="album">{props.item.name}</h2>{' '}
    </a>
  );
};

export default Album;
