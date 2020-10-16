import React from 'react';
import './aside.css';

export const Aside = props => {
    return (
        <section className="aside__playlist-wrapper">
            <a href={props.playlistURL} className="aside__playlist"><img src={props.image} alt="Cover of playlist" /></a>
        </section>
    )

};
