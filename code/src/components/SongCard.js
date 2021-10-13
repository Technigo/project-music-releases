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
        <a
          href={props.item.external_urls.spotify}
          target='_blank'
          rel='noopener noreferrer'
        >
          <SongTitle title={props.item.name} />
        </a>
        <div className='artists-container'>
          {props.item.artists.map((artist) => {
            return <Artist key={artist.id} artist={artist} />;
          })}
        </div>
      </article>
    </>
  );
};
