import React from 'react';
import Artists from  './Artists'
import Icons from './Icons'


const Album = (props) => {
    return (
      <article className="album-container">
      <section className="album-card">
<div className="album-image-container">
  <div className="overlay">
<Icons albumLink={props.albumLink} />
<img
src={props.img}
className="album-cover"
alt={props.albumTitle}
/>
</div>
</div>
<a
        href={props.albumLink}
        target="_blank"
        rel="noopener noreferrer"
        className="album-title-link"
      >
<h2 className="album-title">{props.title}</h2>
      </a>
      <div className="singer">
            {props.artists.map((artists) => (
              <Artists
                key={artists.name}
                artistName={artists.name}
                artistUrl={artists.external_urls.spotify}
              />
            ))}
          </div>
    </section>
  </article>
);
};
    

export default Album;