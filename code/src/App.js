import React from 'react'
import data from './data.json'
import Album from './components/Album'

export const App = () => {
  return (
    <>
      <Album 
      data ={data}
      />
      
    </>
  )
}
