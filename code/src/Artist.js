import React from 'react'

import './artist_style.css'

export const Artist = (props) => {

  // console.log(props)

  return (
    <a href={props.item.external_urls.spotify}>{props.item.name}</a>
  )
}