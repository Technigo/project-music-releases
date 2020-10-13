import React from 'react';
import './artist.css';

export const Artist = props => {
    return (
        <span>{{props.item.name}}</span>
    )
}