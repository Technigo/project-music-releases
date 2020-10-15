import React from 'react';

const Artist = (props) => {
    return (
        <div>
            <a className="artist" href={props.artistUrl} target="_blank" rel="noopener noreferrer" >
            {props.artist}
            </a >
        </div>
    )
};

export default Artist;