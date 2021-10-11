import React from 'react';
import data from '../data.json';

import { SongTitle } from './SongTitle';
import { Artists } from './Artists';
import { CoverImages } from './CoverImages';

export const SongCard = (props) => {
  const myComponents = [CoverImages, SongTitle, Artists];
  return (
    <>
      <div>
        {myComponents.map((AnyComponent, index) => (
          <div key={index.id}>
            <AnyComponent />
          </div>
        ))}
      </div>
    </>
  );
  //<h2>{data.albums.items[0].name}</h2>
  //<h3>{data.albums.items[0].artists[0].name}</h3>

  // <CoverImages />
  // <SongTitle />
  // <Artists />
};
