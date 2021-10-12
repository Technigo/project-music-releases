import React from 'react'

const Artist = ({ artistLink, artistName }) => {
    return (
        <a href={artistLink} className="artist" target="_blank" rel="noreferrer noopener" >
            {artistName}
        </a>
    )
}

export default Artist

