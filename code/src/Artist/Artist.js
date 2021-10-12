import React from 'react'

const Artist = ({ artistLink, artistName }) => {
    return (
        <div>
            <a href={artistLink} className="artist">
                {artistName}
            </a>
        </div>
    )
}

export default Artist

