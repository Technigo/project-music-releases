import React from 'react'

export const Vinyl = (props) => {
  return (
    <article className="card">
      <img src={props.album.images[1].url} alt="{props.album.name}" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </article>
  )
}

export default Vinyl
