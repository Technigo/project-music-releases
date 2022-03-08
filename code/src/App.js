import React from 'react'
import data from './data.json'
import Album from 'components/Album';


console.log(data)

export const App = () => {
  // const dataArray = JSON.parse(data);
 
  return (
  <>
  {data.albums.items.map(item => {
    const image = item.images[1].url;
    // const artist =item.artists[0].name;
    const artists = item.artists;
   const artistNames =  artists.map(artist => artist.name).join(', ');
   const songtitle =item.name;
    return <Album image={image} songtitle={songtitle} name={artistNames} key={item.id}/>
  })}
  </>
  );
}

