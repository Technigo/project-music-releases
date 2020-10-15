import React from 'react'

export const Artist = props => {
  return (
    <li>
      <a href={props.link} target="_blank">{props.name}</a>
    </li>
  )
}