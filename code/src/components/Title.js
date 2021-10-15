import React from 'react';

// ALBUM TITLE COMPONENT
const Title = (props) => {
  return (
    <a key={props.id} href={props.item.external_urls.spotify}>
      <h2 className="title">{props.item.name}</h2>{' '}
    </a>
  );
};

export default Title;
