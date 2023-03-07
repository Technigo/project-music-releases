import React from 'react'
import { ArtistName } from './ArtistName';

export const AlbumInfo = (props) => {
  console.log('album', props)
  return (

    <div>

      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.image} alt="cover" className="cover-image" />
      </a>

      <div>
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.name}
        </a>
      </div>

      <div>
        {props.artists.map((artist) => {
          return <ArtistName
            key={artist.id}
            name={artist.name}
            link={artist.external_urls.spotify} />
        })}
      </div>

    </div>

  )
};

export default AlbumInfo;

// target="_blank" == open in new tab.
// rel="noopener noreferrer" == target resource won’t know where the visitor came from