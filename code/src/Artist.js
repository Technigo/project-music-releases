import React from 'react';
import './artist.css';

/*We need to make a split-function here for artistName */

const Artist = props => {
    if (props.length === 1)
        return <a className="artist-name" href={props.artistURL}>{props.artistName}</a>
    else {
        if (props.index < (props.length - 1))
            return <a className="artist-name" href={props.artistURL}><span>{props.artistName}, </span></a>
        else
            return <a className="artist-name" href={props.artistURL}>{props.artistName}</a>
    }
};


export default Artist;
