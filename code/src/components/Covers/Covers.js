import React from 'react';
import './covers.css';

export const Covers = ({ cover, album }) => {
  console.log(album)
  return (
    <div className="covers-container">
      <img src={cover} alt="album cover" className="img-cover" />
      <div className="hover-img">
        <i className="bi bi-heart icn-heart" />
        <a href={album.external_urls.spotify} target="blank">
          <i className="bi bi-play-circle icn-play" />
        </a>
        <i className="bi bi-three-dots icn-dots" />
      </div>
    </div>)
}

//