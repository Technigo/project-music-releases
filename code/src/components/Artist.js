import React from 'react';

export const Artist = (props) => {
  console.log(props)
  return (
    <div>
      <a className="artist-link" href={props.artist[0].external_urls.spotify} target="_blank" rel="noopener noreferrer">{props.artist[0].name}</a>
    </div>
  )
}
