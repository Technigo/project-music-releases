/* eslint-disable max-len */
import React from 'react';
import Artist from 'components/Artist';
import Album from 'components/Album';
import 'index.css';
import AlbumCover from 'components/AlbumCover';

import data from './data.json';
import Header from 'components/Header';

export const App = () => {
  return (
    <>
    <Header />
    <div className="container">
      {data.albums.items.map((album) => {
        return (
          <>
            <div>
              <div key={album.id} className="album-container">
                <AlbumCover className="albumCover" cover={album} />
                <Album className="album" albumName={album} />
                <Artist className="artist" artistName={album} />
              </div>
            </div>
          </>
        );
      }
      )}
    </div>
    </>
    )}
  
     //   {/* // Hämtar från Header, title lägger till props.title ////  to comment cmd/ctrl + k + c, to uncomment  cmd/ctrl + k + u */}

