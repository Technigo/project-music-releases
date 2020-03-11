import React from 'react'
import './artist_style.css'

export const ArtistArray = (props) => {
  // console.log(props)
  return  (
    <a className="artist-name" href="http://" > {props.name} </a>
  )
}


/* 
export const ArtistArray = (props) => {
  // console.log(props)
  return  (
    <a className="artist-name" href="" > {props.name} </a>
  )
}


*/