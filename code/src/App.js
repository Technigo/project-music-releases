/* eslint-disable max-len */
import React from 'react';
import Artist from 'components/Artist';
import Album from 'components/Album';
import 'index.css';
import AlbumCover from 'components/AlbumCover';

import data from './data.json';

export const App = () => {
  return (
    <div>
       {data.albums.items.map((album)=> { 
    return (
      <>
      <div className="container">
      <Artist key={album.id} className="artist" artistName={album}/>
      <AlbumCover className="albumCover" cover={album}/>
      <Album className="album" albumName={album}/>
      </div>
      </>
    )}
   )}
    </div>
    )}
  
     //   {/* // Hämtar från Header, title lägger till props.title ////  to comment cmd/ctrl + k + c, to uncomment  cmd/ctrl + k + u */}

