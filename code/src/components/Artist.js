import React from 'react'

const Artist = (props) => {
  return (
    <>
      <a className='artist-name' href={props.artist.external_urls.spotify} key={props.artist.id}>{props.artist.name}</a>
    </>
  )
}

export default Artist