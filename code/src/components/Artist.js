import React from 'react'

//Here we define the html in which the information about the artist (name & url) shall be displayed
const Artist = (props) => {
    return <a className="artist-name" href={props.artistUrl} target="_blank" rel="noopener noreferrer">{props.artistName}</a>
}


export default Artist

