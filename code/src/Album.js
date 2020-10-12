import React from 'react';
import data from './data.json';


export const Album = () => {
  return data.albums.items.map((props) => {
    return <img src={props.images[1]} />
  });
};
    
