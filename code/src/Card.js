import React from 'react';
import data from './data.json';
import Image from 'Image';
import Artist from 'Artist';
import Album from 'Album';
import Icons from 'Icons';

/* What we want inside array:
 Artistname, Albumname (black level sort single/album), Album-image
 Create a filtered array inside this App.js, 
 then use the components with the filtered values from array as props*/

// const nameList = data.albums.items.map((item) => {
//   const artistName = item.artists[0].name
//   const imageBig = item.images[0].url
//   const imageMedium = item.images[1].url
//   const imageSmall = item.images[2].url
//   const albumName = item.name
//   return { artistName, imageBig, imageMedium, imageSmall, albumName }
// });

/* Test for console.logging parts of filteredarray above 
const test = cardArray(data)
test.forEach((item) => {
  console.log(item.albumName)
}) */

const Card = props => {
  return (
    <>
      {data.albums.items.map(item => (
        <article>
          <div>
            <Image key={item.images[0].url} item={item} />
            <Icons />
          </div>
          <Artist
            key={item.artists[0].id}
            artistName={item.artists[0].name}
            artistURL={item.artists[0].external_urls.spotify}
          />
          <Album
            key={item.name}
            albumName={item.name}
            albumURL={item.external_urls.spotify}
          />
        </article>
      ))}
    </>
  );
};

export default Card;
