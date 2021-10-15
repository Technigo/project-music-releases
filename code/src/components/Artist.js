import React from 'react';

const Artist = ({ artistLink, artistName }) => {
    return (
        <h3 class="artist-name">
            <a href={artistLink} className="artist" target="_blank" rel="noreferrer noopener" >
            {artistName}
            </a>
        </h3>
    )
}

export default Artist