import React from 'react';
import './artist.css'

/*We need to make a split-function here for artistName */

const Artist = props => {
  return <a className="artist-name" href={props.artistURL}>{props.artistName}</a>;
};

export default Artist;
