import React from 'react'

const Albuminfo = ({url, album}) => {  
    return (
      <div className="flex-row-albuminfo">
        <p className="album-name">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {album}
          </a>
        </p>
      </div>
    )
  }

export default Albuminfo