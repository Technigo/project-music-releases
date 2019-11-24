import React from 'react'

export const Card = (props) => {
  return (
    <article className="card album">
      {props.children}
    </article>
  )
}