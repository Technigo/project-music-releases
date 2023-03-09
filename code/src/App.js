/* eslint-disable max-len */
import React from 'react';
import Artist from 'components/Artist';
import Album from 'components/Album';
import data from './data.json';

export const App = () => {
  {data.albums.items.map((album) => {
  return (
    <div>
      <Artist
      artistName={album.artists[0].name} //(ändra till {album.artists[0].name}?)
      key={album.artists[0].id}
      />
      <Album
      AlbumCover={album.images[0].url} //(ändra till {album.images[0].url}?)
      albumTitle={album.name}
      key={album.id}
       />
    </div>
  )}
  )}
   }

   console.log()
   
     {/* {album.artist.map((singleArtist) => { 
    //    return <Artist name={singleArtist.name} />
    // })}
          {gurka.artists.map((singleArtist) => { 
    return <span>{singleArtist.name}</span>
     })}
    //       {gurka.artists.map((singleArtist) => { 
    return <Artist artistName={singleArtist.type} />
     })}
    // 
    // })
    // <section>
    //   {/* // Hämtar från Header, title lägger till props.title ////  to comment cmd/ctrl + k + c, to uncomment  cmd/ctrl + k + u */}



    // {data.albums.items.map((album)=> { 
    //   return (
    //     <>
    //     <Artist artistName={album}/>
    //     <AlbumCover cover={album}/>
    //     <Album />
    //     </>
    //   )}
    //  )}