import React from 'react';


export const AlbumTitle = (props) => {
    return (
        <div className='album-title'>
            {props.item.name}
            <a href= {props.item.external_urls.spotify}/>
        </div>
    )
};