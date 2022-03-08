import React from 'react';
import Icons from './Icons';
import Artists from './Artists';

const Album = (props) => {

    return (
      <article className="album-card">

      <div className="image-container">
        <Icons />
        <img src={props.item.images[0].url} alt="album cover" />
      </div>

      <div className="text-wrapper">

        <h2 className="song-title">
          <a
            href={props.item.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.item.name}
          </a>
        </h2>

        <h3 className="song-artists">
          <Artists artistArray={props.item.artists} />
        </h3>

      </div>

    </article>
  );
}

export default Album



/* <article className="Album">
      <h2>Students of jan2022 class seems to loke React</h2>
      <p>According to newest studies, jan2022 class have spoken - React is the best framework</p>
      <p>7th of March, 2022</p>
      <img src="https://www.placecage.com/200/300" alt="Niclas Cage" />
      <div>
        <span>Programming</span>
        <span>React</span>
      </div>
    </article> */