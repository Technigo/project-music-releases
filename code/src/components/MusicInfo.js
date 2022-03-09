import React from 'react';
import { Albums } from './Albums'

const MusicInfo = (props) => {
  return (
    <section className="albums-wrapper">
    {props.musicList.albums.items.map((item) => {
         return <Albums key={item.id} albumTitle={item.name} image={item.images[1].url} artists={item.artists[0].name} albumURL={item.external_urls.spotify} artistURL={item.artists[0].external_urls.spotify}/>
       })}
       </section>
  );
}

export default MusicInfo;