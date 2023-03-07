import React from 'react';

export const Artist = (props) => {
  console.log(props)
  return (
    <>
    <span>{props.artist[0].name}</span>
    <span>{props.artist[0].external_urls.spotify}</span>
    </>
  )
}