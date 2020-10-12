import React from 'react';
import './Artist.css'

export const Artist = (props) => {
    return <a href={props.artistUrl} className="artist-title"><p>{props.name}</p></a>


};