import React from 'react';

const Artist = (props) => {
    return (
        <h3 class="artist-name">
            <a href={props.artistLink} className="artist" target="_blank" rel="noreferrer noopener" >
            {props.artistName}
            </a>
        </h3>
    )
}

export default Artist