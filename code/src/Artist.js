import React from 'react';
import './artist.css';

const Artist = props => {
  if (props.index === 0) {
    return (
      <a className="artist__name" href={props.artistURL}>
        {props.artistName}
      </a>
    );
  } else if (props.index === props.length - 1) {
    return (
      <>
      <span className="artist__ampersand">{'\u00A0&\u00A0'}</span>
      <a className="artist__name" href={props.artistURL}>
        {props.artistName}
      </a>
      </>
    );
  } else {
    return (
      <>
      <span>, </span>
      <a className="artist__name" href={props.artistURL}>
        {props.artistName + ' '}
      </a>
      </>
    );
  }
};
export default Artist;
