import React from 'react';
import './aside.css';

export const Aside = props => {
    return (
        <article className="playlist">
            <a href={props.playlistURL} className="playlist"><img className="playlist-cover" src={props.image} alt="Cover of playlist" /></a>
        </article>
    )

};
