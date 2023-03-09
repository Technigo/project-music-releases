import React from 'react';
import '../index.css';
import { ArtistsName } from './ArtistsName';

const Album = (props) => {
  console.log('album', props);
  return (
    <div>
      <p>{props.name}</p>
      <div>
        {props.artists.map((artist) => {
          return (
            <ArtistsName
              key={artist.id}
              name={artist.name}
              link={artist.external_urls.spotify} />
          );
        })}
      </div>
    </div>
  );
};

export default Album;