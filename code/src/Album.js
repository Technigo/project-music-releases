import React from 'react'
// Album card
export const Album = (props) => {
  console.log(props)
  return (
    <div className="Card">
      <img src={props.image} alt="A small image here please"></img>
      <p> Artist: {props.name} </p>
      <p> Title: {props.title} </p>
    </div>
  )
}