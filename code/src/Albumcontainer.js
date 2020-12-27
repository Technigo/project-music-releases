import React from 'react';

import { AlbumArtistName } from './AlbumArtistName'
import { Heart } from './Heart'
import {Play} from './Play'
import { Dots } from './Dots'


export const AlbumContainer = props => {
  return (
    <>
      <div className="album-card">
        <div className="container">
          <a href={props.linkAlbum}>
          <img className="album-cover" src={props.image} alt="Album cover" ></img>
          </a>
          <div class="icons-wrapper">
            <div className="icons iconheart"><Heart /></div>
            <div className="icons iconplay"><Play /></div>
            <div className="icons icondots"><Dots /></div>
          </div>
      </div>
        <div className="album-name">{props.name}</div>
        <div> {props.artists.map (artist => {
          return (
            <AlbumArtistName
              key={artist.id}
              name={artist.name}
              linkArtist={artist.external_urls.spotify}
            />
          )
        })}
        </div>
      </div>
    </>
    );
  }