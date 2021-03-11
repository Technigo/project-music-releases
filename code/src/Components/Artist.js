import React from 'react'


const Artist = (props) => {
  return (
    <a href={props.url} className="artist">
      {props.name}
    </a>
  )
}

export default Artist