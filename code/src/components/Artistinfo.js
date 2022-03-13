import React from 'react'

const Artistinfo = (props) => {  
    console.log(props)

    return (
      <div className="flex-row-artistinfo">
        <p className="artist-name">
            <a id="artist-id" href={props.artistUrl} target="_blank" rel="noopener noreferrer">
            {props.artist}
            </a>
        </p>
      </div>
    )
  }

export default Artistinfo
