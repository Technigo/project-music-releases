import React from 'react'

const Playlist = (props) => {
  return (
    <li>
      <p><strong>{props.name}</strong><span className="hidden"> - by {props.owner}</span></p>
    </li>
  )
}

export default Playlist