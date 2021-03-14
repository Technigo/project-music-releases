import React from 'react'


const Artist = (props) => {
    const contributors = props.artists.map(artist => {
        return artist.name
    })  
    return (
            <div key={contributors.id} className="contributors">
                <a href={contributors.external_urls} target="_blank" rel="noopener noreferrer">
                    <p>{contributors}</p>
                </a>
            </div>
        )
}

export default Artist



