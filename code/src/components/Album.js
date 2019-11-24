import React from 'react'

export const Album = (props) => {
  return (
    <div className="album">
      <a href={props.url} className="album-link">
        {props.children}
        <h2 className="album-title custom-underline">{props.name}</h2 >
      </a>
    </div>
  )
}