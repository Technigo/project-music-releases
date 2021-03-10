import React from 'react';


const Album = (props) => {
    console.log(props);

    return (
        <div>
            <div>{albums.images[1].url}</div>
        </div>
        // <img src={props.images[0].url} alt="album" />
    )
}

export default Album;