/* eslint-disable indent */
/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-quotes */
import React from 'react'
import AlbumArtist from 'components/AlbumArtist'
import Header from 'components/Header'
import Playlists from 'components/Playlists';
import playlists from './stretch-goal.json';
import data from './data.json';
import Artwork from './components/Artwork'
import AlbumName from './components/AlbumName'

import './index.css';

export const App = () => (
  <div className='body-container'>
    <Header />
    <div className='music-section'>
    <div className='music-container'>
      {data.albums.items.map(item => {
        return <>
          <div className='Albums'>
            <Artwork key={item.id} item={item} img={item.images} />
            <AlbumName key={item.name} AlbumName={item.name} AlbumUrl={item.external_urls.spotify} />
            <AlbumArtist key={item.artists.name} AlbumArtist={item} />
          </div>
        </>;
      })}
    </div>
    <div className='playlist-container'>
      <Playlists data={playlists} />
    </div>
    </div>
  </div>
)