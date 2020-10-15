import React from 'react';

import Image from 'Image';
import Artists from 'Artists';
import Album from 'Album';

const Release = (props) => {
  return (
    <article className="release">
      <Image image={props.image[1].url} />
      <Album album={props.album} albumUrl={props.albumUrl} />
      <Artists artists={props.artists} />
    </article>
  )
};

export default Release;