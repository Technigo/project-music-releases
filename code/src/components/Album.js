import React from 'react';
import Buttons from './Buttons';
import Artist from './Artist';

const Album = (props) => {
  return (
    <section className="albums albums-type-albums">
      {props.data.albums.items.map((singleItem) => {
        if (singleItem.album_type === 'album') {
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
        } else {
          return (
            console.log("It's a single")
          )
        }
      })}
    </section>
  );
};

export default Album;
