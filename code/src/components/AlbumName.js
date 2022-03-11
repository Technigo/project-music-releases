import React from 'react'

const AlbumName=(props) => {
    return(<a className='album-name' href={props.name.external_urls.spotify}>{props.name.name}</a>)
}

export default AlbumName