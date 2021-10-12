import React from 'react';

const Album = (props) => {
    console.log(props)

    return (
        <>
        <img
            src={props.album.images[1].url}
            className="cover-img"
            alt={props.album.name}
        />
        <h2>{props.album.name}</h2>
        </>
    )
}

export default Album