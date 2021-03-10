import React from 'react'
import data from './data.json'
import Album from './components/Album'
import Header from './components/Header'

// console.log(data)

export const App = () => {
  return (
    <div>
      <Header />
      <Album data={data}/>
    </div>
  )
}
