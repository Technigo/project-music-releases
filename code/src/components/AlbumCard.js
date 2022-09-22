/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
import React from 'react';
import ArtistName from './ArtistName';
import AlbumName from './AlbumName';
import Icons from './Icons';

const AlbumCard = ({ albumInformation }) => {
  // eslint-disable-next-line jsx-quotes
  // 'jsx-closing-bracket-location': [1, 'after-props']

  return (
    <section className="album-card">
      <div className="album-container">
        {/* prettier-ignore */}
        <img
          src={albumInformation.images[1].url}
          className="cover-img"
          alt={albumInformation.name} />
        <div className="hidden-icons">
          <h2>
            <Icons link={albumInformation.external_urls.spotify} />
          </h2>
        </div>
      </div>
      {/* prettier-ignore */}
      <AlbumName
        title={albumInformation.name}
        link={albumInformation.external_urls.spotify} />
      <ArtistName artists={albumInformation.artists} />
    </section>
  );
};

export default AlbumCard;
