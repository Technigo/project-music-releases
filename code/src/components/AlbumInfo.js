import React from 'react'
import '../index.css';
import { ArtistName } from './ArtistName';

export const AlbumInfo = (props) => {
  console.log('album', props)
  return (

    <div className="cover-wrapper">

      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.image} alt="cover" className="album-cover" />
      </a>

      <div className="icons">
        <img className="icons img" src="./icons/heart.svg" alt="" />
        <img className="icons img" src="./icons/play.svg" alt="" />
        <img className="icons img" src="./icons/dots.svg" alt="" />
      </div>

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