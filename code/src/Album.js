import React from 'react'
// import data from './data.json'

import "./components/album.css";

export const Album = (props) => {
  return (
    <section className="album">
      <div>
        <img src={props.cover} />
      </div>
      <div>
        <h2>{props.name}</h2>
        </div>
      <div>
        <h3>{props.artist}</h3>
        </div>
    </section>
  )
}