import React from 'react';

import { SongTitle } from './SongTitle';
import { Artist } from './Artist';
import { CoverImage } from './CoverImage';

export const SongCard = (props) => {
  console.log(props);
  return (
    <>
      <article className='song-card'>
        <CoverImage image={props.item.images[1].url} />
        <SongTitle title={props.item.name} />
        {props.item.artists.map((artist, index) => {
          return <Artist key={index} artist={artist} />;
        })}
      </article>
    </>
  );
};
