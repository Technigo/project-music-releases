import React from 'react'

// This compontent prints all the artists including the featured artists

export const Artist = (props) => {
  return (
    <a class="artist" href={props.artist.external_urls.spotify}>
      {props.artist.name}</a>
  )
}