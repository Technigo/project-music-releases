import React from 'react';

import { SongTitle } from './SongTitle';
import { Artist } from './Artist';
import { CoverImage } from './CoverImage';

export const SongCard = (props) => {
  return (
    <article className='song-card'>
      {/* display album type and release date */}
      <div className='album-type'>
        {props.objectItem.album_type}
        <span className='release-date'>{props.objectItem.release_date}</span>
      </div>
      {/* display album cover image */}
      <CoverImage
        /* image = link to cover image url */
        image={props.objectItem.images[1].url}
        /* playSong = link to title song url */
        playSong={props.objectItem.external_urls.spotify}
      />
      <a
        href={props.objectItem.external_urls.spotify}
        target='_blank'
        rel='noopener noreferrer'
      >
        {/* display song title */}
        <SongTitle title={props.objectItem.name} />
      </a>
      {/* display all artists */}
      <div className='artists-container'>
        {props.objectItem.artists.map((artist) => {
          return <Artist key={artist.id} artist={artist} />;
        })}
      </div>
    </article>
  );
};
