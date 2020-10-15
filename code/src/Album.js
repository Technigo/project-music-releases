import React from 'react';

const Album = (props) => {
    return (
        <div className="album-container">
            <a href={props.albumUrl} target="_blank" rel="noopener noreferrer" className="album">{props.album}</a>
        </div>
    )
};

export default Album;