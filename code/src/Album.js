import React from 'react';
import './album.css'

const Album = props => {
  return <a className="album-name" href={props.albumURL}>{props.albumName}</a>;
};

export default Album;
