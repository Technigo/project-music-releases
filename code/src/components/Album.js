import React from 'react';
import Artist from './Artist';

const Album = (props) => {
  return (
    <section>
      {props.data.albums.items.map((singleItem) => {
        return (
          <div key={singleItem.id}>
            <div>
              <p className="hide">PLay button</p>
            </div>
            <img src={singleItem.images[2].url} alt={singleItem.name} />
            <a target="_blank" href={singleItem.external_urls.spotify} alt={singleItem.name} rel="noreferrer">{singleItem.name}</a>
            <Artist artistName={singleItem.artists} />
          </div>
        )
      })}
    </section>
  );
};

export default Album;
