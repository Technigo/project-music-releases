import React from 'react'

const Artistinfo = ({artist, artistUrl}) => {  
    return (
      <div className="flex-row-artistinfo">
        <p className="artist-name">
            <a id="artist-id" href={artistUrl} target="_blank" rel="noopener noreferrer">
            {artist}
            </a>
        </p>
      </div>
    )
  }

export default Artistinfo
