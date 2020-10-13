import React from 'react';
import data from './data.json';
import { Header } from './Header';
import { Album } from './Album.js';

//const albums = data.albums;
//console.log(albums)
console.log(data);

const albumArray = data.albums.items;
console.log(albumArray);

/*albumArray.forEach(items => {
    console.log(items.name)
    console.log(items.images[1].url)
    console.log(items.external_urls.spotify)

    const artistArray = items.artists
    artistArray.forEach(artists => {
      console.log(artists.name)
      console.log(artists.external_urls.spotify)
    })
    //console.log(artistArray);
}); */


export const App = () => {
  return (
    <>
      <Header />
      {
        albumArray.map(album => {
          return (
          <Album 
          key = {album.name}
          name = {album.name}
          image = {album.images[1].url}
          albumUrl = {album.external_urls.spotify}
          artists = {album.artists}
          />
          )
        
      })}
      
     
    </>
  );
}

/*ReactDOM.render(<App />, document.getElementById('root'))

album image x3
artist 
*/

//console.log(data)

  /*const dataArray = data.albums.items.map((item) => {
    const albumName = item.name;
    const artistName
    console.log(albumName);
    return albumName;
  }) 
dataArray.forEach((item) => {
  console.log(item.albumName);
}) */