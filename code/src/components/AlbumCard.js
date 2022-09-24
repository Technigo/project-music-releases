import React from 'react';
import { Icons } from './Icons';
import ArtistName from './ArtistName';

const AlbumCard = (props) => {
  return (
    <div className="AlbumCard">
      <div className="cover">
        <Icons />
        <a href={props.url}>
          <img src={props.img} alt="Album cover" className="album-cover" />
        </a>
      </div>
      <p className="album-name">
        <a href={props.url}>{props.name}</a>
      </p>
      {props.artists.map((artist, i) => (
        <>
          <ArtistName
            key={artist.id}
            name={artist.name}
            url={artist.external_urls.spotify} />
          {i + 1 < props.artists.length && <span className="artist-name" style={{ paddingLeft: 3, paddingRight: 3 }}> , </span>}
        </>
      ))}
    </div>
  );
};

export default (AlbumCard);