import React from 'react';
import { AlbumImage } from './components/AlbumImage';
import { AlbumName } from './components/AlbumName';
import { ArtistName } from './components/ArtistName';

// Album component which is rendered using .map()
// and which you pass the album data into using props.

// Album image
// Album name
// Name of each artist involved with a comma in between

export const Album = (props) => {
  return (
    <div className={Album}>
      {props.artistList.albums.map((singleAlbum) => {
        return (
          <AlbumImage key={} />
          <AlbumName key={} />
          <ArtistName key={singleAlbum.items.artists[0].id} artistDetails={singleAlbum} />
        )
      })}
    </div>
  );
}

/*const NewsList = (props) => {
  return (
    <section>
      {props.articlesList.articles.map((singleArticle) => {
        return (
          <Article key={singleArticle.id} articleDetails={singleArticle} />
        )
      })}
    </section>
  );
};*/
