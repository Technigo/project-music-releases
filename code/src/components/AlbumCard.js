import React from 'react';
import Icons from './Icons';
import ArtistName from './ArtistName';

const AlbumCard = ({ url, img, name, artists }) => {
  return (
    <div className="AlbumCard">
      <div className="cover">
        <Icons />
        <a href={url}>
          <img src={img} alt="Album cover" className="album-cover" />
        </a>
      </div>
      <p className="album-name">
        <a href={url}>{name}</a>
      </p>
      {artists.map((artist, i) => (
        <>
          <ArtistName
            key={artist.id}
            name={artist.name}
            url={artist.external_urls.spotify} />
          {i + 1 < artists.length && <span className="artist-name" style={{ paddingLeft: 3, paddingRight: 3 }}> , </span>}
        </>
      ))}
    </div>
  );
};

export default AlbumCard;

// @TODO add & - see https://stackoverflow.com/c/technigo/questions/2239