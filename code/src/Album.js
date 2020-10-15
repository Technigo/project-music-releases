import React from 'react';

const Album = (props) => {
    return (
        <a href={props.albumUrl} target="_blank" rel="noopener noreferrer" className="album">{props.album}</a>
    )
};

export default Album;