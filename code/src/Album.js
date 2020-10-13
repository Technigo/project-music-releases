import React from 'react';

const Album = props => {
  return <a href={props.albumURL}>{props.albumName}</a>;
};

export default Album;
