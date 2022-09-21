import React from 'react';
import data from './data.json';

export const Artists = (props) => {
  return (
    <>
  <div className="Artists">
    <div>{props.albums.artists[4]}</div>
      
    </div>
    </>
  );
};

console.log(Artists)