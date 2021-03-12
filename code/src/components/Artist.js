import React from 'react'

const Artist = (props) => {
  return (
    <a className='artist-name' href={props.artist.external_urls.spotify} >{props.artist.name}</a>
  )
}

export default Artist