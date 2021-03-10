import React from 'react'

const Artists = (props) => {
    console.log(props.name)
    return (
        <a className="artist" href={props.artistContent.external_urls.spotify} target="_blank">
            {props.artistContent.name}
        </a>
    
    )
}

export default Artists
