import React from 'react'

const Artists = (props) => {
    return (
        <a className="artist" href={props.artistContent.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            {props.artistContent.name}
        </a>
    )
}

export default Artists
