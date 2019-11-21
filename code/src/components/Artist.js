import React from 'react'

export const Artist = (props) => {
  console.log(props)
  return (
    <div className="artist">
      <div><a className="albumTitle" href={props.album.external_urls.spotify}>{props.album.name}</a></div>
      <div><a className="artistTitle" href={props.album.artists[0].external_urls.spotify}>{props.album.artists[0].name}</a></div>
    </div>
  )
}