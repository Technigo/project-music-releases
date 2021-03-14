import React from 'react'
import './TypeOf.css'

export const TypeOf = (props) => {
  return (
    <p className="type"> <mark>{props.type}</mark></p>
  )
}