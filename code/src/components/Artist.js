import React from 'react'

const Artist = (props) => {
    
        const test = props.artists.map(artist => {
            return artist.name
        })
        return (
            <p className="contributors">{test}</p>
        )
}

export default Artist