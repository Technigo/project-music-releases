/* eslint-disable max-len */
import React from 'react';
import './covers.css';

export const Covers = ({ cover, album }) => {
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
// In the above function Covers we return the cover image and add the icons that shows when you hover on top of the album. Covers container contains the album image and inside that one there is another container called hover-img that contains the icons. This one is not displayed always but only when the user hovers over it. The play icon is nested inside an anchor tag that brings you to the album page in Spotify.