import React from 'react'

const AlbumName=(props) => {
    return(<a className='album-name' href={props.link}>{props.title}</a>)
}

export default AlbumName