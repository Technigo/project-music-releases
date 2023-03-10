import React from 'react';
import Artist from './Artist';
import Buttons from './Buttons';
import '../album.css';

// const Albums function = Defining the functional component Albums that takes in a props object.
// <img>-content= Creating an img element with the album cover image as the source,
// and a class name of 'albumCover'.
// <a>-content = Creating an anchor element with the album name as the text content,
// and a class name of 'albumName'.
// <Artist js-mount = Creating an instance of the Artist component and passing in the
// artists array as a prop.

const Albums = (props) => {
  return (
    <div className="album">
      <div className="coverAndButtons">
        <div className="image" />
        <img
          src={props.data.images[1].url}
          className="albumCover"
          alt={props.data.name} />
        <div className="icons">
          <Buttons />
        </div>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.data.external_urls.spotify}
        key={props.data.id}
        className="albumName">
        {props.data.name}
      </a>
      <Artist artists={props.data.artists} />
    </div>
  );
};

export default Albums;
