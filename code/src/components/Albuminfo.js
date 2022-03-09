import React from 'react'

const Albuminfo = (props) => {  
    return (
      <div className="">
        <p className="album-name">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.album}
          </a>
        </p>
        <p className="artist-name">
          <a href={props.artistUrl} target="_blank" rel="noopener noreferrer">
            {props.artist}
          </a>
        </p>
      </div>
    )
  }

export default Albuminfo