import React from 'react';

export const Artists = (props) => {
    return (
        <div className="artist-name">
            <a href={props.artistURL}>
                <p>{props.artistName}</p>
            </a>
        </div>
    );
};