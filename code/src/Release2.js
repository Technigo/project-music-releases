import React from 'react';
import Image from 'Image';
import Artist from 'Artist';
import Album from 'Album';
import data from './data.json';

const Release2 = () => {
  return (
    <article className="release">
      <Image />
      <div>
        {data.albums.items.map((item) => {
          return (
            <Album name={item.name} />
          );
        })}
      </div>
      <Artist />
    </article>
  )
};

export default Release2;