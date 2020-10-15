import React from 'react';
import { Albumartistname } from './Albumartistname'
import { Heart } from './Heart'
import {Play} from './Play'
import { Dots } from './Dots'


export const Albumcontainer = props => {
  console.log("We want album name:", props)
    return (
    <>
    <a className="album-card" href={props.linkAlbum}>
      <div className="container">
        <img className="album-cover" src={props.image} alt="Album cover" ></img>
        <div class="icons-wrapper">
      <div className="icons"><Heart /></div>
      <div className="icons"><Play /></div>
      <div className="icons"><Dots /></div>
    </div>
      </div>
      
    <div className="albumsname">{props.name}</div>

    <div className="newartist">
      {props.artists.map (artist => {return <Albumartistname
      key={artist.id}
      name={artist.name}
      linkArtist={artist.external_urls.spotify}
      />
      // artists.name.map(artist => artist.name).join(", ")
    })}
    </div>
    </a>
    </>
    );
  }