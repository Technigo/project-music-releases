import React from 'react';
import './aside.css';

export const Aside = props => {
  return (
    <section className="aside__section">
      <a className="aside__link" href={props.playlistURL}>
        <div className="aside__image-container">
        <img
          className="aside__image"
          src={props.image}
          alt="Cover of playlist"
        />
        </div>
      </a>
    </section>
  );
};
