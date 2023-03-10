import React from 'react'
import '../index.css';
import { ArtistName } from './ArtistName';
import { AlbumCover } from './AlbumCover';
import { AlbumTitle } from './AlbumTitle';

export const AlbumMaster = (props) => {
  console.log('album', props)
  return (

    <div className="master-wrapper">
      <AlbumCover
        cover={props.data.images[0].url}
        link={props.data.external_urls.spotify} />

      <div className="title-wrapper">
        <AlbumTitle
          name={props.data.name}
          link={props.data.external_urls.spotify} />

        <ArtistName
          artistArray={props.data.artists} />
      </div>

    </div>

  )
};

export default AlbumMaster;
