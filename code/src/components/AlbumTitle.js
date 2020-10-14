import React from 'react';


export const AlbumTitle = (props) => {
    return (
        <div className='album-title'>
            {props.item.name}
        </div>
    )
};