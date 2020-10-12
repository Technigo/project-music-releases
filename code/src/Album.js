import React from 'react';
import './index.css'


export const Album = (props) => {
    return (
        <div className='album-cover'>
            <div className='album-image'>
                <img src={props.item.images[1].url} alt='Album cover'></img>
            </div>
        </div>
    )
};

