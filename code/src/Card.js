import React from 'react';
import data from './data.json';
import Image from 'Image.js';

/* What we want inside array:
 Artistname, Albumname (black level sort single/album), Album-image
 Create a filtered array inside this App.js, 
 then use the components with the filtered values from array as props*/

  const nameList = data.albums.items.map((item) => {
    const artistName = item.artists[0].name
    const imageBig = item.images[0].url
    const imageMedium = item.images[1].url
    const imageSmall = item.images[2].url
    const albumName = item.name
    return { artistName, imageBig, imageMedium, imageSmall, albumName }
  });

/* Test for console.logging parts of filteredarray above 
const test = cardArray(data)
test.forEach((item) => {
  console.log(item.albumName)
}) */

const Card = () => {
  return (
  <article>
    {data.albums.items.map((item) => (
        <Image key={item.id} item={item} />
      ))}
  </article>);
};

export default Card;