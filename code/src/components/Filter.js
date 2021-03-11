import React from 'react'
//import data from '../data.json'

const Filter = ({albumChangeType})=> {

  return(
    <button onClick= { () => albumChangeType()}> Filter</button>
  )
}

export default Filter