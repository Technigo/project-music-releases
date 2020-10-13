import React from 'react';

const Artist = props => {
  return <a href={props.artistURL}>{props.artistName}</a>;
};

export default Artist;
