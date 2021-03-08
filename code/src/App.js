import React from 'react'
import data from './data.json'
import Album from './components/Album'

// console.log(data)

export const App = () => {
  return (
    <div>
      <Album data={data}/>
      Find me in src/app.js!
    </div>
  )
}
