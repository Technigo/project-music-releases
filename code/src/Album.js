import React from 'react'
// Album card
export const Album = (props) => {
  console.log(props)
  return (
    <div className="Card">
      <img src={props.image} alt="Album artwork"></img>
      <p> Artist: {props.name} </p>
      <p> Title: {props.title} </p>
    </div>
  )
}