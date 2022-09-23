import React from 'react';
import { Icons } from './Icons';
import ArtistName from './ArtistName';

const AlbumCard = (props) => {
  return (
    <div className="AlbumCard">
      <div className="coverAlbumText">
        <div className="cover">
          <Icons />
          <a href={props.url}>
            <img src={props.img} alt="Album cover" className="album-cover" />
          </a>
        </div>
        <p className="album-name">
          <a href={props.url}>{props.name}</a>
        </p>
      </div>
      {props.artists.map((artist) => (
        <ArtistName
          key={artist.id}
          name={artist.name}
          url={artist.external_urls.spotify} />
      ))}

    </div>
  );
};

export default (AlbumCard);