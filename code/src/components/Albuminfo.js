import React from 'react'

const Albuminfo = (props) => {  
    return (
      <div className="flex-row-albuminfo">
        <p className="album-name">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.album}
          </a>
        </p>
      </div>
    )
  }

export default Albuminfo