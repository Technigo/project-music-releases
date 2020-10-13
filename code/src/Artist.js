import React from 'react';

export const Artist = (props) => {
  return (
    <>
      <p>
        Artist name: {props.artistName}
      </p>
      <p>
        Artist URL: {props.artistUrl}
      </p>
    </>
  );
}