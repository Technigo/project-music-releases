/* eslint-disable max-len */
import React from 'react';
import Artist from 'components/Artist';
import Album from 'components/Album';
import AlbumCover from 'components/AlbumCover';
import data from './data.json';

export const App = () => {
  return (
    <div>
   {data.albums.items.map((album)=> { 
    return (
      <>
      <Artist artistName={album}/>
      <AlbumCover cover={album}/>
      </>
    )}
   )}
    </div>
    )}
   
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

