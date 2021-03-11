import React from 'react';
import moment from 'moment';
import './Album.css';
import Artists from 'components/Artists/Artists';
import AlbumImage from 'components/AlbumImage/AlbumImage';

const Album = (props) => {
  const date = moment(props.releaseDate);
  return (
    <div className="album">
      <div className="album__image--wrapper">
        <AlbumImage image={props.image} url={props.url} />
      </div>
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className="link link__album">
        {props.name}
      </a>
      <Artists artists={props.artists} />
      <p className="text-inline text--small">Released <b>{date.format('MMM DD')}</b></p>
    </div>
  );
};

export default Album;
