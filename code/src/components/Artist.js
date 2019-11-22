import React from 'react'
import './artist.css'

export const Artist = (props) => {

  return (
    <a className="artistTitle" href={props.item.external_urls.spotify}>{props.item.name}</a>
  )

}