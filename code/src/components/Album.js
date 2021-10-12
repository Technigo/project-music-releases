import React from 'react'

export const Album = (props) => {
    console.log(props)
    return (
        <article className="album">
          <img src={props.img} alt="album cover" />
          <h2 className="title">{props.title}</h2>
          <p className="artist">{props.artist}</p>
        </article>
      )
} 
