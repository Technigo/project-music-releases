import React from 'react';

export const Artist = (props) => {
  return (
    <>
      <p className="artist-name">
         <a className="artist-name" href={props.artistUrl} target="_blank">{props.artistName}</a>
      </p>
    </>
  );
}