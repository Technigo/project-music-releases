import React from 'react';
import Image from 'Image';
import Artist from 'Artist';
import Album from 'Album';


const Release = (props) => {
  return (
    <article className="release">
      <Image image={props.image[1].url} />
      <Album album={props.album} albumUrl={props.albumUrl} />
      <Artist artist={props.artist} />
    </article>
  )
};

export default Release;