import React from 'react'
import data from '../data.json'

const TestName = data.albums

/*const TestTwo = Array.from(
  data.albums, item => item.name
)*/

const Test = (props) => {
  return (
    <div>
      <p>{props.albums}</p>
    </div>
  )
}

export default Test