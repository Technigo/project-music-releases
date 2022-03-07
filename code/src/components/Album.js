import React from 'react';

// Named export
const Album = (props) => {
    return (
    <article className="Album">
        <img src={props.img} />
        <h2>{props.albumName}</h2>
        <a>{props.albumLink}</a>
    </article>
    )
}

export default Album
// Only able to export 1 time with export default