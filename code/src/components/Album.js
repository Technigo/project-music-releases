import React from 'react';

const Album = (props) => {
    console.log(props)

    return (
        <h2>{props.album.name}</h2>
    )
}

export default Album