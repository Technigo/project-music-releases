import React from 'react'
import data from './data.json'


export const Artist = () => {
    return data.albums.items.map((item) => {
        return item.artists[0].name;
    });
  };