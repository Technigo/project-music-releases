import React from 'react'
import data from './data.json'
import Album from './components/Album'


// console.log(data)

export const App = () => {
  return (
    <>
      <p>New albums & singles</p>
      <Album 
      data ={data}
      />
      
    </>
  )
}
