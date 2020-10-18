import React from 'react';


export const AlbumTitle = (props) => {
    return (
        <div className='album-title'>
            <a href={props.item.external_urls.spotify}>
                    {props.item.name}
            </a>
        </div>
    )
};