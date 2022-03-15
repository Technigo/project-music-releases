import React from 'react'

const AlbumName=(props) => {
    return(<a target= "_blank" rel="noopener noreferrer" className='album-name' href={props.name.external_urls.spotify}>{props.name.name}</a>)
}

export default AlbumName