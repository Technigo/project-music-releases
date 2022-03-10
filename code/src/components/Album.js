import React from 'react';
import Artists from 'components/Artists'
import AlbumTitle from 'components/AlbumTitle'
import {ReactComponent as PlayIcon} from '../assets/icons/play.svg';
import {ReactComponent as HeartIcon} from '../assets/icons/heart.svg';
import {ReactComponent as DotsIcon} from '../assets/icons/dots.svg';

const Album = (props) => {
  return (
    <section className="album-container">
      <a href={props.albumUrl} className="album-image-container">
      <img src={props.image} alt="" className="album-image" />
        <div className="album-button-container">
          <button type="button" className="album-heart">
            <HeartIcon />
          </button>
          <button href={props.albumUrl} className="album-play">
            <PlayIcon />
          </button>
          <button type="button" className="album-dots">
            <DotsIcon />
          </button>
        </div>
      </a>

        <div className="artist-name-container">
        {props.artists.map((artist, index) => {

        let isLastItem = false;
        const artistName = artist.name;
        const artistUrl = artist.external_urls.spotify;

        if(index === props.artists.length -1 ){ isLastItem = true;
            }
        return <Artists key={artistUrl} isLast={isLastItem} name={artistName} url={artistUrl} />
            })}
        </div>

        <AlbumTitle name={props.songtitle} url={props.albumUrl}/> 
    </section>
        )
}
export default Album;


