import React from 'react'

const Artists = (props) => {
  return (
    <a
      className="singer"
      href={props.artistUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.artistName}
    </a>
  )
}

export default Artists
