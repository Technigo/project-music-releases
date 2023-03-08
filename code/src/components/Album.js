import Artists from 'components/Artists';
import 'style/styling.css'
import 'index.css'
import React from 'react';

// props = { album }
//  const imgSrc = props.album.images[0];
const Album = (props) => {
  return (
    <div className="album-container">
      <div className="pictures">
        <img className="Img" src={props.album.images[0].url} alt="coverImage" />

      </div>
      <h1 className="albumName">{props.album.name}</h1>

      <Artists artists={props.album.artists} />
    </div>
  );
};

export default Album;