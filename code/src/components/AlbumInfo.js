import React from 'react'
import '../index.css';
import { ArtistName } from './ArtistName';

export const AlbumInfo = (props) => {
  console.log('album', props)
  return (

    <div>

      <div className="cover-wrapper">

        <a href={props.link} target="_blank" rel="noreferrer" className="image">
          <img src={props.image} alt="cover" className="album-cover" />
        </a>

        <div className="image-overlay">
          <div className="icons-container">
            <img className="heart-icon icons" src="./icons/heart.svg" alt="heart button" />
            {/* INCLUDED HREF TO PLAY-ICON  */}
            <a target="_blank" rel="noopener noreferrer" href={props.link}>
              <img className="icon play-icon" src="../icons/play.svg" alt="play icon" />
            </a>
            <img className="dots-icon icons" src="./icons/dots.svg" alt="dots button" />
          </div>
        </div>

      </div>

      <div>
        <a href={props.link} target="_blank" rel="noreferrer">
          <h2 className="album-name">{props.name}</h2>
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