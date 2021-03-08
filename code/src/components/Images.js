import React from 'react';
import data from '../data.json'

export const Images = () => {
    return (
    <>

    { data.albums.items.map((album) => {
    return ( 
        <p key={album.name}> { album.name } </p>
        
    )})
    }

    </>
    )
}
