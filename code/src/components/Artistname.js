import React from 'react';

export const Artistname = (props) => {
  return (
    <div>
      {props.artist.map((artist) => {
        return <div>{artist.name}</div>;
      })}
    </div>
  );
};
