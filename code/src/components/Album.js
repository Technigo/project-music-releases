
/* Monday lecture stuff */

import React from 'react'

export const Album = (props) => {
    console.log(props)
    return (
        <article className="album">
          <img src={props.img} alt="spring view" />
          <h2>{props.title}</h2>
          <p>{props.artist}</p>
        </article>
      )
} 
