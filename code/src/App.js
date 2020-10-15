import React from 'react';
import data from './data.json';
import { Album } from "./Album";

//array of albums to fetch album data from
const albumArr = data.albums.items;

export const App = () =>
  (
    <div className="master-container">
      <h1 className="site-header">New albums &#38; singles</h1>
      <div className="header-line"></div>
      <div className="albums">
        {albumArr.map((album) =>

          //Create one album component for each item in the album array
          <Album
            key={album.name}
            name={album.name}
            img={album.images}
            album_url={album.external_urls.spotify}
            artists={album.artists}
          />

        )}
      </div >
    </div>
  )
