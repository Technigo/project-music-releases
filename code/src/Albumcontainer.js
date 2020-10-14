import React from 'react';
import { Albumartistname } from './Albumartistname'
import { Heart } from './Heart'
import {Play} from './Play'
import { Dots } from './Dots'
// import data from  './data.json';
// console.log(data.albums.items[0].name);


export const Albumcontainer = props => {
  console.log("We want album name:", props)
    return (
    <>
    <a href={props.link}>
      <img src={props.image} alt="Album cover" ></img>
    <div className="albumsname">{props.name}</div>
             {/* // < Albumsname /> */}
    <div>
      {props.artists.map (artist => {return <Albumartistname
      key={artist.id}
      name={artist.name}
      linkArtist={artist.external_urls.spotify} />
    })}
    </div>
    <div className="icons">
      <Heart />
      <Play />
      <Dots />
    </div>
    </a>
    </>
    );
  }