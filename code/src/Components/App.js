import React from 'react';
import data from '../data.json';
import stretchGoal from '../stretch-goal.json' //black-level
import { Album } from './Album';
import { Heading } from './Heading';
import { Playlist } from './Playlist';
import { PlaylistHeader } from './PlaylistHeader';
import './App.css'

//console.log(data);
//console.log(data.albums.items[0].artists[0].name);


const albums = data.albums;
//console.log(albums);

//creates a new array of albums
const albumArray = albums.items;
console.log(albumArray);



// albumArray.forEach(album => {
//   // console.log(album.name); //album name
//   // console.log(album.images[1].url); //images of album
//   // console.log(album.external_urls.spotify); //url to album url

//   const artistArray = album.artists;
//   artistArray.map(artist => {
//     console.log(artist.name); //artist/artists name
//     console.log(artist.external_urls.spotify); //each artist external url
//   });
// });





/* BLACK LEVEL TEST */
console.log(stretchGoal)

const playlist = stretchGoal.playlists
console.log(playlist)

const playlistArray = playlist.items
console.log(playlistArray)

// playlistArray.forEach(playlist => {
//   console.log(playlist.name)
//   console.log(playlist.images[0].url)
//   console.log(playlist.external_urls.spotify)
// })


/*END OF BLACK LEVEL TEST*/

export const App = () => {
  return (
    <>
      <header className="heading">
        <Heading />
      </header>

      <section className="content-wrapper">
        <div className="albums-container" >
          {
            albumArray.map(album => {
              return (
                <Album
                  key={album.id}
                  name={album.name}
                  image={album.images[1].url}
                  albumUrl={album.external_urls.spotify}
                  artists={album.artists}
                />)
            })
          }
        </div>

        <div className="playlist-container">

          { //add section that wraps this and move 85 closing to line 72
            playlistArray.map(playlist => { //blacklevel 74-81 
              return (
                <Playlist
                  key={playlist.id}
                  image={playlist.images[0].url}
                  playlistUrl={playlist.external_urls.spotify}
                  name={playlist.name}
                />
              )
            })
          }
        </div>
      </section>
    </>
  )
};