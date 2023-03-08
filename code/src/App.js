import React from 'react'
import data from './data.json'
import { Albums } from './components/Albums'

console.log(data);

export const App = () => {
  return (
    <div>
      Hello!
      <Albums />
    </div>
  )
}
