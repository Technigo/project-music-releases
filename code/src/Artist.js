import React from 'react'
import data from './data.json'

console.log(data)

export const Artist = (props) => (
  <div>
    <div className="Artist-list-container" >
      <a className="Album" href={props.uri}>{props.albumname}</a>
      <a className="Artist" href={props.artisturi}>{props.artistname}</a>
    </div>
  </div>
)