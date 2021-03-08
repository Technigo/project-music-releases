import React from 'react'


const AlbumImage = (props) =>{
    return(
        <>
            <img src={props.item.images[1].url} alt={props.item.name} />
        </>
    )
}

export default AlbumImage