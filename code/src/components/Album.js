import React from 'react';
import Buttons from './Buttons';
import Artist from './Artist';

const Album = (props) => {
  return (
    <section className="albums">
      {props.data.albums.items.map((singleItem) => {
        return (
          <div className="album-info" key={singleItem.id}>
            <div className="img-btn-cover">
              <div className="album-img-container">
                <img className="album-img" src={singleItem.images[0].url} alt={singleItem.name} />
              </div>
              <Buttons />
            </div>
            <a className="album-name" target="_blank" href={singleItem.external_urls.spotify} alt={singleItem.name} rel="noreferrer">{singleItem.name}</a>
            <Artist artistName={singleItem.artists} />
          </div>
        )
      })}
    </section>
  );
};

export default Album;
