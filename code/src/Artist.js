import React from 'react';

export const Artist = (props) => {
  return (
    <>
      <p className="artist-name">
        <a href={props.artistUrl}>{props.artistName}</a>
      </p>
    </>
  );
}