import React from 'react'

const Artist = (props) => {
    return (
      <a className="artist-name" href={props.artistUrl} target="_blank" rel="noopener noreferrer">{props.artistName}</a>
    )
}


export default Artist

