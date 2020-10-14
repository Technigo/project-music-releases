import React from 'react';

export const Artist = (props) => {
  return (
    <>
      <div>
        <a className="artist-name" href={props.artistUrl} target="_blank">{props.artistName}</a>
      </div>
    </>
  );
}