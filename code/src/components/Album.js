import React from 'react';
import Icons from './Icons';
import Artists from './Artists';

const Album = (props) => {

    return (
      <article className="album-card">
        
      <div className="image-container">
        <a
            href={props.item.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
        <Icons />
        
        <img src={props.item.images[0].url} alt="album cover" />
        </a>

      </div>

      <div className="text-wrapper">

        <h2 className="song-title">
          {props.item.name}
        </h2>

        <h3 className="song-artists">
          <Artists artistArray={props.item.artists} />
        </h3>

      </div>

    </article>
  );
}

export default Album



