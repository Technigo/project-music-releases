import React from 'react'
import data from './data.json'
import { Albums } from './Components/Albums'
import { Heading } from './Components/Heading'

console.log(data)

export const App = () => {
  return (
    <>
      <Heading />
      <Albums />
    </>
  )
}
