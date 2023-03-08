import React from 'react';
import data from '../data.json';

export const Albums = () => {
    return (
      <div>
        <h2 style={{color:'red'}}>HELLO ALBUMS!!</h2>
        {data.albums.items.map((singleAlbumItem) => {
          return (<h1>{singleAlbumItem.name}</h1>)
        })}
      </div>
    );
  };
