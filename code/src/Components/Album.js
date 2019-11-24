import React from 'react'

export const Album = (props) => {
  return (
    <div className="album-container">
      <a href={props.url} className="album-link">
        <img className="album-img" src={props.image} alt="Album"/>
        <div className="artist-info">
          <h1 className="album-title">{props.name}</h1>
        </div>
      </a>
      {props.children}
    </div>
  )
}
